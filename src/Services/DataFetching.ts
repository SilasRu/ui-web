import transcriptList from '../Assets/Data/Transcripts/transcript-list.json';
import sentiments from '../Assets/Data/sentiment-demo.json';
import { DataApiConfig, ITranscript, ISentiments, IKeyphrases, IKeywords, IEntities } from './types';

const getTranscriptList = () => {
  return transcriptList.transcripts;
};

const getSentiments = () => {
  return sentiments;
};

export class DataApi implements DataApiConfig {
  public transcript: ITranscript | null;
  public baseUrl: string;
  public sectionLength: number | null;

  constructor(config: DataApiConfig) {
    this.transcript = config.transcript;
    this.baseUrl = config.baseUrl;
    this.sectionLength = config.sectionLength;
  }

  public getTranscriptList = () => {
    return transcriptList.transcripts;
  }

  public importTranscript = async (transcriptName: string) => {
    const transcript = await import (`../Assets/Data/Transcripts/${transcriptName}.json`)
    this.transcript = transcript.default
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

}

export { getTranscriptList, getSentiments };
