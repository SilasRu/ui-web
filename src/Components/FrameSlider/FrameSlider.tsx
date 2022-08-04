import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './FrameSlider.css';

interface FrameSliderProps {
  marks: object,
  sliderPosition: number,
  sliderChanged: (event: number[] | number) => void
}


const FrameSlider = (props: FrameSliderProps) => {
  return (
    <div className="slider">
      <Slider
        min={0}
        max={Object.keys(props.marks).length - 1}
        defaultValue={0}
        onAfterChange={(event) => props.sliderChanged(event)}
        value={props.sliderPosition}
        marks={props.marks}
        step={null}
      />
    </div>
  );
};

export default FrameSlider;
