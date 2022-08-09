import './SentimentChart.css'
import ApexChart from './ApexChart';

const SentimentChart = (props) => {
  return (
    <div className='sentiment-chart'>
      <div className="sentiment-chart-title">Sentiment over time</div>
      <div className="sentiment-chart-desc">Number of positive & negative sentences per time interval</div>
      <ApexChart transcriptData={props.transcriptData}/>
    </div>
  )
}

export default SentimentChart