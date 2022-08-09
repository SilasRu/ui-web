import { useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const colorCodes: Array<'primary' | 'success' | 'secondary' | 'error' | 'warning' | 'default' | 'info'> = ['primary', 'success', 'secondary', 'error', 'warning'];

const EntityChip = (props: { entityGroups: object; selectedEntities: number }) => {
  const entityGroupKey = Object.keys(props.entityGroups)[props.selectedEntities];
  const entityGroupToDisplay = props.entityGroups[entityGroupKey];

  const stacks = [];
  const chunkSize = 3;
  for (let i = 0; i < entityGroupToDisplay.length; i += chunkSize) {
    const chunk = entityGroupToDisplay.slice(i, i + chunkSize);
    const stack = chunk.map((nGram, index) => <Chip key={index} label={nGram.word} color={colorCodes[props.selectedEntities]} variant="outlined"></Chip>);

    stacks.push(
      <Stack direction="row" spacing={1}>
        {stack}
      </Stack>
    );
  }

  return (
    <div className="entity-chips">
      <Stack spacing={1} alignItems="center">
        {stacks.map((key, index) => (
          <div key={index}>{key}</div>
        ))}
      </Stack>
    </div>
  );
};

export default EntityChip;
