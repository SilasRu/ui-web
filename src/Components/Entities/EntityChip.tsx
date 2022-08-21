import _ from 'lodash';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const colorCodes: Array<'primary' | 'success' | 'secondary' | 'error' | 'warning' | 'default' | 'info'> = ['info', 'success', 'secondary', 'error', 'primary', 'warning'];
const colorMap = {
  PER: 0,
  LOC: 1,
  ORG: 2,
  MISC: 3,
  'Non-speaker PERS': 4,
};
const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const EntityChip = (props: { entityGroups: object; selectedEntities: number | null; handleKeywordClick: (keyword: any) => void }) => {
  const groups = ['PER', 'LOC', 'ORG', 'MISC', 'Non-speaker PERS'];
  const entityGroupToDisplay = props.selectedEntities !== null ? props.entityGroups[groups[props.selectedEntities]] : _.uniqBy(Object.values(props.entityGroups).flat(), 'word');
  const s1 = _.sortBy(entityGroupToDisplay, (o) => o.in_speakers && o.entity_group === 'PER');
  const sortedChips = _.sortBy(s1, (o) => o.entity_group !== 'PER');
  const chips = sortedChips.map((data, key) => {
    return (
      <ListItem key={key}>
        <Chip
          key={key}
          label={data.word}
          color={data.entity_group === 'PER' && !data.in_speakers ? 'primary' : colorCodes[colorMap[data.entity_group]]}
          variant="outlined"
          onClick={() => props.handleKeywordClick(data.word)}
        ></Chip>
      </ListItem>
    );
  });

  return (
    <div className="entity-chips">
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
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
        {chips}
      </Paper>
    </div>
  );
};

export default EntityChip;
