import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './FrameSlider.css';

const WordSlider = (props) => {
  return (
    <div className="slider">
      <p>Frame slider</p>
      <Slider
        min={0}
        max={Object.keys(props.marks).length - 1}
        defaultValue={0}
        onAfterChange={(v) => {
          props.sliderChanged(v);
        }}
        marks={props.marks}
        step={null}
      />
    </div>
  );
};

export default WordSlider;
