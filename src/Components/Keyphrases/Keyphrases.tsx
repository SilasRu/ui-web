import './Keyphrases.css';
import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import KeyphraseList from '../KeyphraseList/KeyphraseList';
import { ITranscriptData } from 'src/Services/types';
import IconButton from '@mui/material/IconButton';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';

const Keyphrases = (props: { transcriptData: ITranscriptData; handleTimeframeClick: (string) => void; currentTimeFrame: number | null; selectedKeyword: string | null }) => {
  let keyphrasesSelected = Object.values(props.transcriptData.keyphrases.dimensions.time).flat();
  let contextSelected = Object.values(props.transcriptData.keyphrases.dimensions.source_time_section).flat();

  if (props.currentTimeFrame !== null) {
    keyphrasesSelected = props.transcriptData.keyphrases.dimensions.time[props.currentTimeFrame];
    for (let i = 0; i < keyphrasesSelected.length; i++) {
      contextSelected[i] = props.transcriptData.keyphrases.dimensions.source_time_section[props.currentTimeFrame];
    }
  } else {
    let index = 0;
    Object.values(props.transcriptData.keyphrases.dimensions.time).forEach((segmentValues, segmentIndex) => {
      for (let i = 0; i < segmentValues.length; i++) {
        contextSelected[index] = props.transcriptData.keyphrases.dimensions.source_time_section[segmentIndex];
        index++;
      }
    });
  }

  if (props.selectedKeyword !== null) {
    const keyphrasesContainingKeyword = keyphrasesSelected.filter((sentence) => props.selectedKeyword.split(' ').some((v) => sentence.toLowerCase().includes(v.toLowerCase())));
    const contextContainingKeyword = Object.keys(props.transcriptData.keyphrases.dimensions.time)
      .flatMap((key) => {
        return props.transcriptData.keyphrases.dimensions.time[key].flatMap((val) => {
          if (keyphrasesContainingKeyword.includes(val)) {
            return key;
          }
        });
      })
      .filter(Boolean);

    keyphrasesSelected = keyphrasesContainingKeyword;
    contextSelected = contextContainingKeyword.map((i) => contextSelected[i]);
  }

  return (
    <div className="keyphrases">
      <KeyboardEventHandler
        handleKeys={['left', 'right', 'r']}
        onKeyEvent={(key, e) => {
          if (key === 'left') {
            props.handleTimeframeClick('PREVIOUS');
          } else if (key === 'right') {
            props.handleTimeframeClick('NEXT');
          } else if (key === 'r') {
            props.handleTimeframeClick('RESET');
          }
        }}
      />
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
        <KeyphraseList transcriptData={props.transcriptData} keyphrasesSelected={keyphrasesSelected} contextSelected={contextSelected} selectedKeyword={props.selectedKeyword} />
      </div>
    </div>
  );
};

export default Keyphrases;
