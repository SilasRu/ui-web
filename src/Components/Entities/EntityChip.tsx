import _ from 'lodash';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { styled, useTheme } from '@mui/material/styles';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const EntityChip = (props: { entityGroups: object; selectedEntities: number | null; handleKeywordClick: (keyword: any, type: any) => void }) => {
  const theme = useTheme();
  const backgroundColorMap = {
    PER: theme.charts.blueMono.one,
    LOC: theme.charts.blueMono.two,
    ORG: theme.charts.blueMono.three,
    MISC: theme.charts.blueMono.four,
    'Non-speaker PER': theme.charts.blueMono.five,
  };
  const fontColorMap = {
    PER: 'white',
    LOC: 'white',
    ORG: 'white',
    MISC: 'black',
    'Non-speaker PER': 'black',
  };
  const groups = ['PER', 'LOC', 'ORG', 'MISC', 'Non-speaker PER'];
  const entityGroupToDisplay = props.selectedEntities !== null ? props.entityGroups[groups[props.selectedEntities]] : _.uniqBy(Object.values(props.entityGroups).flat(), 'word');
  const s1 = _.sortBy(entityGroupToDisplay, (o) => o.in_speakers && o.entity_group === 'PER');
  const sortedChips = _.sortBy(s1, (o) => o.entity_group !== 'PER');
  const chips = sortedChips.map((data, key) => {

    return (
      <ListItem key={key}>
        <Chip
          key={key}
          label={data.word}
          // color={colorCodes[colorMap[data.entity_group]]}
          style={{
            backgroundColor: backgroundColorMap[data.entity_group],
            color: fontColorMap[data.entity_group],
            border: data.entity_group === 'PER' && !data.in_speakers ? '3px double white'  : null
          }}
          variant='filled'
          onClick={() => props.handleKeywordClick(data.word, 'Entity')}
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
