import TranscriptDropdown from '../Components/TranscriptDropdown';
import './Home.css';
import { getTranscriptList } from '../Services/dataService.js';

const Home = () => {
  const transcriptList = getTranscriptList();
  return <TranscriptDropdown transcriptList={transcriptList} />;
};

export default Home;
