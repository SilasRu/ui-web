import './Keyphrases.css';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import KeyphraseList from '../KeyphraseList/KeyphraseList';
import { ITranscriptData } from 'src/Services/types';
import IconButton from '@mui/material/IconButton';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';

const Keyphrases = (props: { transcriptData: ITranscriptData; handleTimeframeClick: (string) => void; currentTimeFrame: number }) => {
  const keyphrasesSelected = props.transcriptData.keyphrases.dimensions.time[props.currentTimeFrame];

  return (
    <div className="keyphrases">
      <KeyboardEventHandler
      handleKeys={['left', 'right']}
      onKeyEvent={(key, e) => {
        if (key === 'left') {
          props.handleTimeframeClick('PREVIOUS')
        } else if (key === 'right') {
          props.handleTimeframeClick('NEXT')
        }
      }} />
      <div className="keyphrases-top">
        <div className="keyphrases-top-text">
          <h1 className="keyphrases-top-title">Keyphrases</h1>
          <h1 className="keyphrases-top-desc">Lorem Ipsum</h1>
        </div>
        <div className="keyphrases-top-buttons">
          <IconButton aria-label="upload picture" component="label" onClick={() => props.handleTimeframeClick('PREVIOUS')}>
            <ChevronLeftOutlinedIcon />
          </IconButton>
          <IconButton aria-label="upload picture" component="label" onClick={() => props.handleTimeframeClick('NEXT')}>
            <ChevronRightOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="keyphrases-bottom">
        <KeyphraseList keyphrasesSelected={keyphrasesSelected} />
      </div>
    </div>
  );
};

export default Keyphrases;
