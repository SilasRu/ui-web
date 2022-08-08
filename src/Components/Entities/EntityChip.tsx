import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const EntityChip = () => {
  return (
    <div className="entity-chips">
        <Stack spacing={1} alignItems="center">
        <Stack direction="row" spacing={1}>
          <Chip label="LinkedIn API" color="success" />
          <Chip label="Luca" color="success" variant="outlined"/>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip label="development Channel" color="success" variant="outlined" />
          <Chip label="Iway" color="success" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip label="Klara" color="success" variant="outlined" />
          <Chip label="GoWago" color="success" variant="outlined" />
        </Stack>
      </Stack>
    </div>
  )
}

export default EntityChip