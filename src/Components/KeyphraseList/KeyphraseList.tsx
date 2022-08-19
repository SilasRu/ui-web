import './KeyphraseList.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { ListItemIcon } from '@mui/material';

const KeyphraseList = (props) => {
  return (
    <List sx={{ width: '100%', maxWidth: '90%', overflow: 'auto', maxHeight: '230px', bgcolor: 'background.paper' }}>
      {props.keyphrasesSelected.map((sentence, key) => {
        return (
          <>
            <ListItem key={key}>
              <ListItemIcon>
                <ArrowRightOutlinedIcon style={{ color: 'black' }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ display: 'inline', fontFamily: 'Poppins' }} component="span" variant="body2" color="text.primary">
                    {sentence}
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        );
      })}
    </List>
  );
};

export default KeyphraseList;
