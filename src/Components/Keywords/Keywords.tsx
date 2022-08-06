import './Keywords.css'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Keywords = () => {
  return (
    <div className="keywords">
      <Stack spacing={1} alignItems="center">
        <Stack direction="row" spacing={1}>
          <Chip label="pre-planning session life" color="primary" />
          <Chip label="success" color="success" />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip label="primary" color="primary" variant="outlined" />
          <Chip label="success" color="error" variant="outlined" />
        </Stack>
      </Stack>
    </div>
  );
};

export default Keywords;
