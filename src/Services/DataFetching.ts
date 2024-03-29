import { DataApiConfig, ITranscript, ISentiments, IKeyphrases, IKeywords, IEntities } from './types';
import _ from 'lodash';

export class DataApi implements DataApiConfig {
  public transcript: ITranscript | null;
  public baseUrl: string;
  public sectionLength: number | null;

  constructor(config: DataApiConfig) {
    this.transcript = config.transcript;
    this.baseUrl = config.baseUrl;
    this.sectionLength = config.sectionLength;
  }

  public importTranscript = async (transcriptName: string) => {
    const transcript = await import (`../Assets/Data/Transcripts/${transcriptName}.json`)
    this.transcript = transcript.default
    this.transcript.meeting_length = this.transcript?.transcript?.content[0]?.content?.slice(-1)[0]?.content?.slice(-1)[0]?.attrs?.endTime ?? 0
    this.transcript.speaker_turns = this.transcript?.transcript?.content[0]?.content?.length ?? 0
  }

  private fetchAPI = async (url: URL): Promise<any> => {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(this.transcript),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  private concatDimensions = (baseDimension) => {
    const concatenatedDimension = {}
    let currentDimension = []
    let currentIndex = 0

    for (let i=0; i < Object.keys(baseDimension).length; i++) {
      if (i % 2 !== 0) {
        concatenatedDimension[currentIndex] = Array.isArray(baseDimension[i]) ? [...currentDimension, ...baseDimension[i]] : _.round((currentDimension + baseDimension[i]) / 2, 2)
        currentDimension = []
        currentIndex ++
      }else {
        currentDimension = baseDimension[i]
      }
    }
    return concatenatedDimension
  }

  private concatStringDimensions = (baseDimension) => {
    const concatenatedDimension = {}
    let currentDimension = ""
    let currentIndex = 0

    for (let i=0; i < Object.keys(baseDimension).length; i++) {
      if (i % 2 !== 0) {
        concatenatedDimension[currentIndex] = currentDimension.concat(baseDimension[i])
        currentDimension = ""
        currentIndex ++
      }else {
        currentDimension = baseDimension[i]
      }
    }
    return concatenatedDimension
  }

  public fetchSentiments = async (): Promise<ISentiments> => {
    const url = new URL(`${this.baseUrl}/sentiments/`);
    url.searchParams.append('dimensions', String(true));
    if (this.sectionLength) url.searchParams.append('section_length', String(this.sectionLength));
    return this.fetchAPI(url);
  };

  public fetchKeyphrases = async (): Promise<IKeyphrases> => {
    const url = new URL(`${this.baseUrl}/keyphrases/`);
    url.searchParams.append('model', '51la5/QMSUM-keyphrase-gen');
    url.searchParams.append('algorithm', 'bart');
    if (this.sectionLength) url.searchParams.append('section_length', String(this.sectionLength));

    return this.fetchAPI(url);
  };

  public fetchKeywords = async (): Promise<IKeywords> => {
    const url = new URL(`${this.baseUrl}/keywords/`);
    url.searchParams.append('model', '51la5/QMSUM-keyphrase-gen');
    if (this.sectionLength) url.searchParams.append('section_length', String(this.sectionLength));

    return this.fetchAPI(url);
  };

  public fetchEntities = async (): Promise<IEntities> => {
    const url = new URL(`${this.baseUrl}/entities/`);
    if (this.sectionLength) url.searchParams.append('section_length', String(this.sectionLength));

    return this.fetchAPI(url);
  };

  public fetchAll = async (transcriptName: string) => {
    await this.importTranscript(transcriptName);
    const sentiments = await this.fetchSentiments()
    const keyphrases = await this.fetchKeyphrases()
    const keywords = await this.fetchKeywords()
    const entities = await this.fetchEntities()
    
    keyphrases.dimensions.source_time_section = this.concatStringDimensions(keyphrases.dimensions.source_time_section)
    sentiments.dimensions.time = this.concatDimensions(sentiments.dimensions.time)
    keyphrases.dimensions.time = this.concatDimensions(keyphrases.dimensions.time)
    keywords.dimensions.time = this.concatDimensions(keywords.dimensions.time)
    entities.dimensions.time = this.concatDimensions(entities.dimensions.time)


    return {transcript: this.transcript, sentiments, keyphrases, keywords, entities}


  }

}