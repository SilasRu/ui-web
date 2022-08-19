import './Keywords.css';
import * as React from 'react';
import { ITranscriptData } from 'src/Services/types';
import KeywordsList from '../KeywordsList/KeywordsList';

const Keywords = (props: { transcriptData: ITranscriptData; currentTimeFrame: number }) => {
  const selectedKeywords = props.transcriptData.keywords.dimensions.time[props.currentTimeFrame];
  return (
    <div className="keywords">
      <div className="keywords-title">Keywords</div>
      <div className="keywords-desc">Lorem Ipsum</div>
      <div className="keywords-content">
        <div className="keyword-chips">
          <KeywordsList selectedKeywords={selectedKeywords} />
        </div>
      </div>
    </div>
  );
};

export default Keywords;
