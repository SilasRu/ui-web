import './Template.css';
import Widget from 'src/Components/Widget/widget';
import Chart from 'src/Components/SentimentChart/SentimentChart';
import Table from 'src/Components/Table/Table';
import SpeakerNetwork from 'src/Components/SpeakerNetwork/SpeakerNetwork';
import Keywords from 'src/Components/Keywords/Keywords';
import Navbar from 'src/Components/Navbar/Navbar';

const Template = () => {
  return (
    <div>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <SpeakerNetwork />
          <Keywords />
          <Chart />
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
