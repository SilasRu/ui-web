import './KeyphraseList.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import Chip from '@mui/material/Chip';

const KeyphraseList = (props) => {  
  const theme = useTheme();
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: '100%',
        overflow: 'auto',
        maxHeight: '240px',
        bgcolor: '#dddddd40',
        borderRadius: '10px',
      }}
    >
      {props.keyphrasesSelected.map((sentence, key) => {
        return (
          <div className="keyphrase-list-item">
            <ListItem key={key}>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      display: 'inline',
                      fontFamily: 'Poppins',
                    }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {/* {props.selectedKeywords.filter(i=>sentence.includes(i)).map(i=>(<Chip label={i} variant='outlined' size='small'/>))} */}
                  </Typography>
                }
                secondary={sentence}
              />
            </ListItem>
          </div>
        );
      })}
    </List>
  );
};

export default KeyphraseList;
