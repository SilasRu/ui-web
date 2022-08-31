import './Keywords.css';
import * as React from 'react';
import { ITranscriptData } from 'src/Services/types';
import KeywordsList from '../KeywordsList/KeywordsList';

const Keywords = (props: { transcriptData: ITranscriptData; currentTimeFrame: number | null; handleKeywordClick: (keyword: any) => void ; selectedKeyword: string | null}) => {
  const selectedKeywords =
    props.currentTimeFrame !== null ? props.transcriptData.keywords.dimensions.time[props.currentTimeFrame] : Object.values(props.transcriptData.keywords.dimensions.time).flat();

  return (
    <div className="keywords" onClick={props.handleKeywordClick}>
      <div className="keywords-title">Keywords</div>
      <div className="keywords-desc">The main topics in shortform</div>
      <div className="keywords-content">
        <div className="keyword-chips">
          <KeywordsList selectedKeywords={selectedKeywords} handleKeywordClick={props.handleKeywordClick} selectedKeyword={props.selectedKeyword}/>
        </div>
      </div>
    </div>
  );
};

export default Keywords;
