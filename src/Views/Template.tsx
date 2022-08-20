import './Template.css';
import mainTheme from '../theme';
import React from 'react';

import SentimentChart from 'src/Components/SentimentChart/SentimentChart';
import Table from 'src/Components/Table/Table';
import SpeakerNetwork from 'src/Components/SpeakerNetwork/SpeakerNetwork';
import Keyphrases from 'src/Components/Keyphrases/Keyphrases';
import Navbar from 'src/Components/Navbar/Navbar';
import Entities from 'src/Components/Entities/Entities';
import Keywords from 'src/Components/Keywords/Keywords';
import SummaryCard from 'src/Components/SummaryCard/SummaryCard';

import { ThemeProvider } from '@mui/material/styles';
import { DataApi } from 'src/Services/DataFetching';
import { ITranscriptData } from 'src/Services/types';
import Initial from 'src/Components/Initial/Initial';

const Template = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const sectionLength = 175;
  const config = { transcript: null, baseUrl, sectionLength };
  const dataApi = new DataApi(config);
  const [transcriptData, setTranscriptData] = React.useState<ITranscriptData | null>(null);
  const [currentTimeFrame, setCurrentTimeFrame] = React.useState<number | null>(null);

  const handleTimeframeClick = (event) => {
    setSelectedEntities(null)
    if (event === 'PREVIOUS') {
      if (currentTimeFrame === null) {
        setCurrentTimeFrame(() => 0);
      } else if (currentTimeFrame !== 0) {
        setCurrentTimeFrame(() => currentTimeFrame - 1);
      }
    } else if (event === 'NEXT') {
      if (currentTimeFrame === null) {
        setCurrentTimeFrame(() => 0);
      } else if (currentTimeFrame !== Object.keys(transcriptData.keywords.dimensions.time).length - 1) {
        setCurrentTimeFrame(() => currentTimeFrame + 1);
      }
    } else if (event === 'RESET') {
      setCurrentTimeFrame(() => null);
    }
  };
  const [selectedEntities, setSelectedEntities] = React.useState<number>(null);
  React.useEffect(() => {
    dataApi.fetchAll('nexoya daily standup 2022-05-25').then((res) => setTranscriptData(res));
  }, []);
  const handleTranscriptImport = async (transcriptName: string) => {
    dataApi.fetchAll(transcriptName).then((res) => setTranscriptData(res));
    setSelectedEntities(null)
  };

  return (
    <ThemeProvider theme={mainTheme}>
      {transcriptData ? (
        <div>
          <div className="home-container">
            <Navbar handleTranscriptImport={handleTranscriptImport} />
            <div className="home-top">
              <SummaryCard transcriptData={transcriptData} />
              <Entities transcriptData={transcriptData} currentTimeFrame={currentTimeFrame} setSelectedEntities={setSelectedEntities} selectedEntities={selectedEntities} />
              <SentimentChart transcriptData={transcriptData} currentTimeFrame={currentTimeFrame}/>
            </div>
            <div className="home-bottom">
              <SpeakerNetwork transcriptData={transcriptData} currentTimeFrame={currentTimeFrame}/>
              <Keyphrases transcriptData={transcriptData} handleTimeframeClick={handleTimeframeClick} currentTimeFrame={currentTimeFrame} />
              <Keywords transcriptData={transcriptData} currentTimeFrame={currentTimeFrame} />
            </div>
            <div className="home-list">
              <div className="home-list-title">Latest Transactions</div>
              <Table />
            </div>
          </div>
        </div>
      ) : (
        <Initial />
      )}
    </ThemeProvider>
  );
};

export default Template;
