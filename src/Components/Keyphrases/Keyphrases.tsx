import './Keyphrases.css';
import KeyphraseList from '../KeyphraseList/KeyphraseList';
import { ITranscriptData } from 'src/Services/types';

const Keyphrases = (props: { transcriptData: ITranscriptData; currentTimeFrame: number }) => {
  const keyphrasesSelected = props.transcriptData.keyphrases.dimensions.time[props.currentTimeFrame];
  return (
    <div className="keyphrases">
      <h1 className="keyphrases-top-title">Keyphrases</h1>
      <h1 className="keyphrases-top-desc">Lorem Ipsum</h1>
      <div className="keyphrases-top"></div>
      <div className="keyphrases-bottom">
        <KeyphraseList keyphrasesSelected={keyphrasesSelected} />
      </div>
    </div>
  );
};

export default Keyphrases;
