import './KeyphraseList.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const KeyphraseList = (props) => {  
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: '100%',
        overflow: 'auto',
        maxHeight: '260px',
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
