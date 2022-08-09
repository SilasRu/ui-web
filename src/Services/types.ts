export interface ITranscript {
  name: string;
  speaker_info: object[];
  start_times: number[];
  end_times: number[];
  date: string;
  meeting_length: number;
  speaker_turns: number;
  transcript: any;
}

export interface DataApiConfig {
  transcript: ITranscript | null;
  baseUrl: string;
  sectionLength: number | null;
}

interface IDimensions {
  time: object;
  speaker: object;
}

interface ISentimentsContent {
  content: string;
  label: 'POSITIVE' | 'NEGATIVE';
  score: number;
}

export interface ISentiments {
  dimensions: IDimensions;
  sentiments: ISentimentsContent[];
}

export interface IKeyphrases {
  dimensions: IDimensions;
}

export interface IKeywords {
  dimensions: IDimensions;
}

interface EntityObject {
  in_speakers: boolean;
  word: string;
  entity_group: 'PER' | 'ORG' | 'LOC' | 'MISC';
  occurrence: number;
}
interface EntityDimensions extends IDimensions {
  time: {
    [key: string]: EntityObject;
  };
  speaker: {
    [key: string]: EntityObject;
  };
}
export interface IEntities {
  dimensions: EntityDimensions;
  entities: EntityObject[];
}

export interface ITranscriptData {
  transcript: ITranscript
  sentiments: ISentiments
  keyphrases: IKeyphrases
  keywords: IKeywords
  entities: IEntities
}