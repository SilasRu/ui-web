import './Template.css';
import Widget from 'src/Components/Widget/widget';
import SentimentChart from 'src/Components/SentimentChart/SentimentChart';
import Table from 'src/Components/Table/Table';
import SpeakerNetwork from 'src/Components/SpeakerNetwork/SpeakerNetwork';
import Keywords from 'src/Components/Keywords/Keywords';
import Navbar from 'src/Components/Navbar/Navbar';
import Entities from 'src/Components/Entities/Entities';
import BarChart from 'src/Components/BarChart/BarChart';


const Template = () => {
  return (
    <div>
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Entities />
          <SentimentChart />
          {/* <div>
          <Widget type="user" />
          <Widget type="order" />
          </div>
          <div>
          <Widget type="earning" />
          <Widget type="balance" />
          </div> */}
        </div>
        <div className="charts">
          <SpeakerNetwork />
          <Keywords />
          <BarChart/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Template;
