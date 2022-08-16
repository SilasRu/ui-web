import './Keywords.css';
import * as React from 'react';

import Button from '@mui/material/Button';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';

import Stack from '@mui/material/Stack';
import { ITranscriptData } from 'src/Services/types';
import KeywordsList from '../KeywordsList/KeywordsList';

const Keywords = (props: { transcriptData: ITranscriptData; handleTimeframeClick: (string) => void; currentTimeFrame: number }) => {
  const selectedKeywords = props.transcriptData.keywords.dimensions.time[props.currentTimeFrame];
  return (
    <div className="keywords">
      <div className="keywords-title">Keywords</div>
      <div className="keywords-desc">Lorem Ipsum</div>
      <div className="keywords-content">
        <div className="keyword-chips">
          <KeywordsList selectedKeywords={selectedKeywords} />
        </div>
        <div className="keyword-buttons">
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={() => props.handleTimeframeClick('PREVIOUS')} startIcon={<SkipPreviousOutlinedIcon />}>
              Previous
            </Button>
            <Button variant="contained" onClick={() => props.handleTimeframeClick('NEXT')} endIcon={<SkipNextOutlinedIcon />}>
              Next
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Keywords;
