import './Chart.css'
import React from 'react';
import { DataApi } from "src/Services/DataFetching"
import { ITranscriptData } from "src/Services/types";
import SentimentChart from '../SentimentChart/SentimentChart';

const Chart = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const sectionLength = 175
  const config = {transcript:null, baseUrl, sectionLength}
  const dataApi = new DataApi(config)
  const [transcriptData, setTranscriptData] = React.useState<ITranscriptData | {}>({});

  React.useEffect(() => {
      dataApi.fetchAll('nexoya daily standup 2022-03-17').then(res=>setTranscriptData(res))
  }, [])

  return (
    <div className='chart'>
      <div className="title">Last 6 Months (Revenue)</div>
      <SentimentChart transcriptData={transcriptData}/>
    </div>
  )
}

export default Chart