import { useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const colorCodes: Array<'primary' | 'success' | 'secondary' | 'error' | 'warning' | 'default' | 'info'> = ['primary', 'success', 'secondary', 'error', 'warning'];

const EntityChip = (props: { entityGroups: object; selectedEntities: number }) => {
  const entityGroupKey = Object.keys(props.entityGroups)[props.selectedEntities];
  const entityGroupToDisplay = props.entityGroups[entityGroupKey];

  const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  return (
    <div className="entity-chips">
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          listStyle: 'none',
          overflow: 'auto',
          p: 0.5,
          m: 0,
          maxHeight: '160px',
          boxShadow: '10px 10px 10px rgba(0, 0, 0, 0);',
        }}
        component="ul"
      >
        {entityGroupToDisplay.map((data, key) => {
          return (
            <ListItem key={key}>
              <Chip key={key} label={data.word} color={colorCodes[props.selectedEntities]} variant="outlined"></Chip>
            </ListItem>
          );
        })}
      </Paper>
    </div>
  );
};

export default EntityChip;
