import './Navbar.css';
import TranscriptDropdown from '../TranscriptDropdown/TranscriptDropdown';
import MediationOutlinedIcon from '@mui/icons-material/MediationOutlined';
import DimensionSelector from '../DimensionSelector/DimensionSelector';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-selector">
          {/* <TranscriptDropdown handleTranscriptImport={props.handleTranscriptImport} /> */}
        </div>
        <div className="navbar-items">
          {/* <DimensionSelector /> */}
          <MediationOutlinedIcon color="primary" />
          <div className="navbar-item">
            <p className="navbar-title">Transcript Analyzer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
