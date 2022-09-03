import React from 'react';
import './FilterCard.css';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Chip from '@mui/material/Chip';

const FilterCard = (props) => {
  return (
    <div className="filter-card">
      <div className="filter-card-top">
        <div className="filter-card-top-title">Filter</div>
        <div className="filter-card-top-desc">Currently active filter selection:</div>
      </div>
      <div className="filter-card-bottom">
        {props.selectedKeyword ? (
          <div className="filter-card-bottom-item">
            <div className="filter-card-bottom-left">
              <span className="filter-card-bottom-left-number">Keyword</span>
              <Chip label={props.selectedKeyword} />
            </div>
          </div>
        ) : (
          <></>
        )}
        {props.currentTimeFrame !== null ? (
          <div className="filter-card-bottom-item">
            <div className="filter-card-bottom-left">
              <span className="filter-card-bottom-left-number">Time frame</span>
              <span className="filter-card-bottom-left-desc">{props.currentTimeFrame}</span>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FilterCard;
