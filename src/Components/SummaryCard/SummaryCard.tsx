import './SummaryCard.css';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';

const SummaryCard = () => {
  return (
    <div className="summary-card">
      <div className="summary-card-top">
        <div className="summary-card-top-title">Metadata</div>
        <div className="summary-card-top-desc">General meeting information</div>
      </div>
      <div className="summary-card-bottom">
        <div className="summary-card-bottom-item">
          <div className="summary-card-bottom-left">
            <span className="summary-card-bottom-left-number">6</span>
            <span className="summary-card-bottom-left-desc">Number of participants</span>
          </div>
          <div className="summary-card-bottom-right">
            <AccessibilityNewIcon />
          </div>
        </div>
        <div className="summary-card-bottom-item">
          <div className="summary-card-bottom-left">
            <span className="summary-card-bottom-left-number">10 min</span>
            <span className="summary-card-bottom-left-desc">Meeting length</span>
          </div>
          <div className="summary-card-bottom-right">
            <AccessTimeOutlinedIcon />
          </div>
        </div>
        <div className="summary-card-bottom-item">
          <div className="summary-card-bottom-left">
            <span className="summary-card-bottom-left-number">20</span>
            <span className="summary-card-bottom-left-desc">Speaker turns</span>
          </div>
          <div className="summary-card-bottom-right">
            <AutorenewOutlinedIcon className="summary-card-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
