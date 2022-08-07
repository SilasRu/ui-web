import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const EntityChip = () => {
  return (
    <div className="entity-chips">
        <Stack spacing={1} alignItems="center">
        <Stack direction="row" spacing={1}>
          <Chip label="pre-planning session life" color="success" />
          <Chip label="made analysis" color="secondary" variant="outlined"/>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip label="41 percent last 25" color="error" variant="outlined" />
          <Chip label="intelligence showed" color="info" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip label="41 percent last 25" color="warning" variant="outlined" />
          <Chip label="intelligence showed" color="success" variant="outlined" />
        </Stack>
      </Stack>
    </div>
  )
}

export default EntityChip