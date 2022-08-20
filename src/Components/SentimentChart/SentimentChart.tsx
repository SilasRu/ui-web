import './SentimentChart.css'
import ApexChart from './ApexChart';

const SentimentChart = (props) => {
  return (
    <div className='sentiment-chart'>
      <div className="sentiment-chart-title">Sentiment vs. Heatness</div>
      <div className="sentiment-chart-desc">Number of positive & negative sentences vs. Switches between monologue and dialogue </div>
      <ApexChart transcriptData={props.transcriptData} currentTimeFrame={props.currentTimeFrame}/>
    </div>
  )
}

export default SentimentChart