import TranscriptDropdown from '../Components/TranscriptDropdown/TranscriptDropdown';
import SpeakerNetwork from '../Components/SpeakerNetwork/SpeakerNetwork';

import './Home.css';
import { getTranscriptList, getSentiments } from '../Services/DataFetching.js';
import { toNetworkGraph } from '../Services/dataProcessing';
import t from '../Assets/Data/Transcripts/nexoya daily standup 2022-03-17.json'
import Sentiment from '../Components/Sentiment/Sentiment';

const Home = () => {
  const transcriptList = getTranscriptList();
  const sentimentData = getSentiments();
  const speakerGraphData = toNetworkGraph(t)
  console.log(speakerGraphData)
  // return <TranscriptDropdown transcriptList={transcriptList} />;
  return (
    <div>
      <TranscriptDropdown transcriptList={transcriptList} />
      <div className='info-cards'>
        <SpeakerNetwork speakerGraphData={speakerGraphData}/>
        <Sentiment sentimentData={sentimentData}/>
      </div>
    </div>
  )
};

export default Home;
