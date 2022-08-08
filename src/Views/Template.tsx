import './Template.css';
import SentimentChart from 'src/Components/SentimentChart/SentimentChart';
import Table from 'src/Components/Table/Table';
import SpeakerNetwork from 'src/Components/SpeakerNetwork/SpeakerNetwork';
import Keywords from 'src/Components/Keywords/Keywords';
import Navbar from 'src/Components/Navbar/Navbar';
import Entities from 'src/Components/Entities/Entities';
import BarChart from 'src/Components/BarChart/BarChart';
import SummaryCard from 'src/Components/SummaryCard/SummaryCard';


const Template = () => {
  return (
    <div>
      <div className="home-container">
        <Navbar />
        <div className="home-top">
          <SummaryCard/>
          <Entities />
          <SentimentChart />
        </div>
        <div className="home-bottom">
          <SpeakerNetwork />
          <Keywords />
          <BarChart/>
        </div>
        <div className="home-list">
          <div className="home-list-title">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Template;
