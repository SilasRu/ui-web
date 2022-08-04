import './Home.css';
import * as React from 'react';
import TranscriptDropdown from '../Components/TranscriptDropdown/TranscriptDropdown';
import SpeakerNetwork from '../Components/SpeakerNetwork/SpeakerNetwork';
import Sentiment from '../Components/Sentiment/Sentiment';
import FrameSlider from '../Components/FrameSlider/FrameSlider';
import WordGrid from '../Components/WordGrid/WordGrid';
import Initial from 'src/Components/Initial/Initial';

import { DataApi, getTranscriptList, getSentiments } from '../Services/DataFetching.js';
import { toNetworkGraph } from '../Services/dataProcessing';
import { ITranscript } from '../Services/types';

import t from '../Assets/Data/Transcripts/nexoya daily standup 2022-03-17.json';
import demoWords from '../Assets/Data/slider-demo-words.json';
import demoPhrases from '../Assets/Data/slider-demo-phrases.json';

const Home = () => {
  const transcriptList = getTranscriptList();
  const [transcript, setTranscript] = React.useState<ITranscript | {}>({});
  const transcriptSelected = Object.keys(transcript).length > 0;
  const dataApi = new DataApi({transcript: null, baseUrl:process.env.REACT_APP_BASE_URL, sectionLength:175})
  
  const handleTranscriptImport = async (transcriptName: string) => {
      await dataApi.importTranscript(transcriptName)
      setTranscript(dataApi.transcript);
  };

  const sentimentData = getSentiments();
  const speakerGraphData = toNetworkGraph(t);

  const [sliderPosition, setSliderPosition] = React.useState(0);
  const [words, setWords] = React.useState(demoWords[`frame_0`]['textrank'].map((word) => ({ text: word, value: 10 })));
  const [phrases, setPhrases] = React.useState(demoPhrases['frame_1'].split('.').map((i) => (i.length > 1 ? <li key={i}>{i}</li> : '')));

  const sliderChanged = (index) => {
    setSliderPosition(index);
    const wordsForFrame = demoWords[`frame_${index}`]['textrank'].map((word) => ({ text: word, value: 10 }));
    const phrasesForFrame = demoPhrases[`frame_${index}`].split('.').map((i) => (i.length > 1 ? <li key={i}>{i}</li> : ''));
    setWords(wordsForFrame);
    setPhrases(phrasesForFrame);
  };
  const marks = {};
  Object.keys(demoWords).forEach((key, i) => (marks[i] = key));

  return (
    <div>
      <TranscriptDropdown transcriptList={transcriptList} handleTranscriptImport={handleTranscriptImport} />
      {transcriptSelected ? (
        <div>
          <div className="info-cards">
            <Sentiment sentimentData={sentimentData} />
            <WordGrid words={words} />
            <SpeakerNetwork speakerGraphData={speakerGraphData} />
          </div>
          <div className="slider-content">
            <ul className="slider-bullet">{phrases}</ul>
            <FrameSlider sliderPosition={sliderPosition} sliderChanged={sliderChanged} marks={marks} />
          </div>
        </div>
      ) : (
        <Initial />
      )}
    </div>
  );
};

export default Home;
