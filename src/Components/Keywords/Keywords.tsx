import './Keywords.css'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import KeyphraseList from '../KeyphraseList/KeyphraseList';

const Keywords = () => {
  return (
    <div className="keywords">
      <h1 className='keywords-top-title'>Keyphrases</h1>
      <div className="keywords-top">

      <Stack spacing={1} alignItems="center">
        <Stack direction="row" spacing={1}>
          <Chip label="pre-planning session life" color="primary" />
          <Chip label="made analysis" color="success" />
          <Chip label="average client" color="success" />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip label="41 percent last 25" color="primary" variant="outlined" />
          <Chip label="intelligence showed" color="error" variant="outlined" />
          <Chip label="priceless" color="error" variant="outlined" />
        </Stack>
      </Stack>
      </div>
      <div className="keywords-bottom">
        <KeyphraseList/>
      </div>
    </div>
  );
};

export default Keywords;
