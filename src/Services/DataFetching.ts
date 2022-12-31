import { DataApiConfig, ITranscript, ISentiments, IKeyphrases, IKeywords, IEntities } from './types';

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
    return {transcript: this.transcript, sentiments, keyphrases, keywords, entities}
  }

}