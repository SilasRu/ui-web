import React from 'react';
import './Sentiment.css';
import { PieChart } from 'react-minimal-pie-chart';

const Sentiment = (props) => {
  const positive = props.sentimentData.filter((i) => i.label === 'POSITIVE');
  const negative = props.sentimentData.filter((i) => i.label === 'NEGATIVE');
  const data = [
    { title: 'Positive', value: positive.length, color: '#89EB89' },
    { title: 'Negative', value: negative.length, color: '#FF8E90' },
  ];
  return (
    <div className="info-card-item">
      <span className="transcript-meta-title">Transcript Stats</span>
      <div className="transcript-meta-stats">
        <div className='transcript-meta-pie'>
          <PieChart data={data} lineWidth={50} paddingAngle={2} style={{ height: '10vw' }} />
          <span>Sentiment</span>
        </div>
        <div className="transcript-meta-stats-numbers">
          <span className="transcript-meta-stats-length">Length: <b>100 min</b></span>
          <span className="transcript-meta-stats-speakers">Speakers: <b>5</b></span>
          <span className="transcript-meta-stats-heatness">Heatness: <b>0.5</b></span>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
