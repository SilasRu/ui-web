import './Navbar.css';
import TranscriptDropdown from '../TranscriptDropdown/TranscriptDropdown'
import MediationOutlinedIcon from '@mui/icons-material/MediationOutlined';
import DimensionSelector from '../DimensionSelector/DimensionSelector';

const Navbar = () => {
  const handleTranscriptImport = async (transcriptName: string) => {
    console.log(transcriptName);
  };
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-selector">
            <TranscriptDropdown handleTranscriptImport={handleTranscriptImport}/>
        </div>
        <div className="navbar-items">
        <DimensionSelector/>
        <MediationOutlinedIcon color='primary'/>
          <div className="navbar-item">
            <p className='navbar-title'>Transcript Analyzer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
