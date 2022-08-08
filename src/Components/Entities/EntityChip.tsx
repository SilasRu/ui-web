import { useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


const EntityChip = () => {
  return (
    <div className="entity-chips">
        <Stack spacing={1} alignItems="center">
        <Stack direction="row" spacing={1}>
          <Chip label="LinkedIn API" color='primary' />
          <Chip label="Luca" color="primary" variant="outlined"/>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip label="development Channel" color="success" variant="outlined" />
          <Chip label="development" color="success" />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip label="Iway" color="error" />
          <Chip label="Klara" color="secondary" variant="outlined" />
          <Chip label="GoWago" color="success" variant="outlined" />
        </Stack>
      </Stack>
    </div>
  )
}

export default EntityChip