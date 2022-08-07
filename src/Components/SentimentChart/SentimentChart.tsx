import './SentimentChart.css'
import React from 'react';
import { DataApi } from "src/Services/DataFetching"
import { ITranscriptData } from "src/Services/types";
import SentimentChart from './ApexChart';

const Chart = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const sectionLength = 175
  const config = {transcript:null, baseUrl, sectionLength}
  const dataApi = new DataApi(config)
  const [transcriptData, setTranscriptData] = React.useState<ITranscriptData | {}>({});

  React.useEffect(() => {
      dataApi.fetchAll('nexoya daily standup 2022-03-17').then(res=>setTranscriptData(res))
  }, [])
  console.log(transcriptData)
  return (
    <div className='sentiment-chart'>
      <div className="sentiment-chart-title">Sentiment over time</div>
      <div className="sentiment-chart-desc">Number of positive & negative sentences per time interval</div>
      <SentimentChart transcriptData={transcriptData}/>
    </div>
  )
}

export default Chart