import './SummaryCard.css';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import { ITranscriptData } from 'src/Services/types';

const SummaryCard = (props: {transcriptData: ITranscriptData}) => {
  const nSpeakers = props.transcriptData.transcript.speaker_info.length
  const meetingLength = (props.transcriptData.transcript.meeting_length / 60).toFixed(2)
  const speakerTurns = props.transcriptData.transcript.speaker_turns

  return (
    <div className="summary-card">
      <div className="summary-card-top">
        <div className="summary-card-top-title">Metadata</div>
        <div className="summary-card-top-desc">General meeting information</div>
      </div>
      <div className="summary-card-bottom">
        <div className="summary-card-bottom-item">
          <div className="summary-card-bottom-left">
            <span className="summary-card-bottom-left-number">{nSpeakers}</span>
            <span className="summary-card-bottom-left-desc">Number of participants</span>
          </div>
          <div className="summary-card-bottom-right">
            <AccessibilityNewIcon />
          </div>
        </div>
        <div className="summary-card-bottom-item">
          <div className="summary-card-bottom-left">
            <span className="summary-card-bottom-left-number">{meetingLength} min</span>
            <span className="summary-card-bottom-left-desc">Meeting length</span>
          </div>
          <div className="summary-card-bottom-right">
            <AccessTimeOutlinedIcon />
          </div>
        </div>
        <div className="summary-card-bottom-item">
          <div className="summary-card-bottom-left">
            <span className="summary-card-bottom-left-number">{speakerTurns}</span>
            <span className="summary-card-bottom-left-desc">Speaker turns</span>
          </div>
          <div className="summary-card-bottom-right">
            <RecordVoiceOverOutlinedIcon className="summary-card-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
