import { styled } from '@mui/material/styles';
import { Chip, Paper } from '@mui/material';
import { useTracking } from 'react-tracking';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const KeywordsList = (props: { handleKeywordClick: (keyword: any, type: any) => void; selectedKeywords: string[]; selectedKeyword: string | null }) => {
  const tracking = useTracking()
  return (
    <Paper
      onScroll={()=> tracking.trackEvent({ action: 'keywordScroll' })}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        overflow: 'auto',
        p: 0.5,
        m: 0,
        border: '10px',
        maxHeight: '280px',
        boxShadow: '10px 10px 10px rgba(0, 0, 0, 0)',
        fontWeight: 600,
      }}
      component="ul"
    >
      {props.selectedKeywords.map((data, key) => {
        return (
          <ListItem key={key}>
            <Chip label={data} variant={data === props.selectedKeyword ? 'filled' : 'outlined'} onClick={() => {
              tracking.trackEvent({ action: 'keywordClick' })
              return props.handleKeywordClick(data, 'Keyword')
            }} sx={{
              fontSize: data.split(' ').length > 4 ? '0.7rem' : '0.8125rem',
              maxWidth: '20vw'
            }}/>
          </ListItem>
        );
      })}
    </Paper>
  );
};

export default KeywordsList;
