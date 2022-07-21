import transcriptList from '../Assets/Data/Transcripts/transcript-list.json';
import sentiments from '../Assets/Data/sentiment-demo.json'

const getTranscriptList = () => {
  return transcriptList.transcripts;
};

const getSentiments = () => {
  return sentiments
}

export { getTranscriptList, getSentiments };
