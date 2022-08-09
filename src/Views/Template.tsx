import './Template.css';
import mainTheme from '../theme';
import React from "react";

import SentimentChart from 'src/Components/SentimentChart/SentimentChart';
import Table from 'src/Components/Table/Table';
import SpeakerNetwork from 'src/Components/SpeakerNetwork/SpeakerNetwork';
import Keywords from 'src/Components/Keywords/Keywords';
import Navbar from 'src/Components/Navbar/Navbar';
import Entities from 'src/Components/Entities/Entities';
import BarChart from 'src/Components/BarChart/BarChart';
import SummaryCard from 'src/Components/SummaryCard/SummaryCard';

import { ThemeProvider } from '@mui/material/styles';
import { DataApi } from "src/Services/DataFetching"
import { ITranscriptData } from "src/Services/types";
import Initial from 'src/Components/Initial/Initial';

const Template = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const sectionLength = 175
  const config = {transcript:null, baseUrl, sectionLength}
  const dataApi = new DataApi(config)
  const [transcriptData, setTranscriptData] = React.useState<ITranscriptData | null>(null);

  React.useEffect(() => {
    dataApi.fetchAll('nexoya daily standup 2022-05-25').then(res=>setTranscriptData(res))
  }, [])
  const handleTranscriptImport = async (transcriptName: string) => {
      dataApi.fetchAll(transcriptName).then(res=>setTranscriptData(res))
  };

  return (
    <ThemeProvider theme={mainTheme}>
      {transcriptData ? (
          <div>
          <div className="home-container">
            <Navbar handleTranscriptImport={handleTranscriptImport}/>
            <div className="home-top">
              <SummaryCard transcriptData={transcriptData}/>
              <Entities transcriptData={transcriptData}/>
              <SentimentChart transcriptData={transcriptData}/>
            </div>
            <div className="home-bottom">
              <SpeakerNetwork />
              <Keywords />
              <BarChart />
            </div>
            <div className="home-list">
              <div className="home-list-title">Latest Transactions</div>
              <Table />
            </div>
          </div>
        </div>
      ): <Initial/>}
    </ThemeProvider>
  );
};

export default Template;
