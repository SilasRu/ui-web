import * as React from 'react';
import './SliderDemo.css';
import FrameSlider from '../Components/FrameSlider/FrameSlider';
import WordGrid from '../Components/WordGrid/WordGrid';

import * as demoWords from '../Assets/Data/slider-demo-words.json';
import * as demoPhrases from '../Assets/Data/slider-demo-phrases.json';

const SliderDemo = (props) => {
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
    <div className="slider-demo">
      <div className="slider-grid">
        <WordGrid words={words} />
      </div>
      <ul className="slider-bullet">{phrases}</ul>
      <FrameSlider className="slider-bar" sliderPosition={sliderPosition} sliderChanged={sliderChanged} marks={marks} />
    </div>
  );
};

export default SliderDemo;
