import './SentimentChart.css'
import React from 'react';
import { useTheme } from '@mui/material/styles';
import ApexChart from './ApexChart';
import Chart from './Chart'

const SentimentChart = (props) => {
  const theme = useTheme();

  return (
    <div className='sentiment-chart'>
      <div className="sentiment-chart-title">Sentiment vs. Speaker changes</div>
      <div className="sentiment-chart-desc">Sentiment scores vs. number of speaker changes, aggregated per minute </div>
      <Chart series={props.sentimentSeries} color={theme.charts.sentiment.one} currentTimeFrame={props.currentTimeFrame} formatterLength={1}/>
      <Chart series={props.heatnessSeries} color={theme.charts.sentiment.four} currentTimeFrame={props.currentTimeFrame} formatterLength={0}/>
      {/* <ApexChart transcriptData={props.transcriptData} currentTimeFrame={props.currentTimeFrame}/> */}
    </div>
  )
}

export default SentimentChart