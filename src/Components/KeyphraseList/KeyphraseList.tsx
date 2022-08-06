import './KeyphraseList.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import HdrStrongOutlinedIcon from '@mui/icons-material/HdrStrongOutlined';
import { ListItemIcon } from '@mui/material';

const KeyphraseList = () => {
  return (
    <List sx={{ width: '100%', maxWidth:'90%', bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemIcon>
          <ArrowRightOutlinedIcon style={{color:'black'}}/>
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography sx={{ display: 'inline' ,fontFamily:'Poppins'}} component="span" variant="body2" color="text.primary">
                Marco made an analysis over all of their clients
            </Typography>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemIcon>
          <ArrowRightOutlinedIcon style={{color:'black'}}/>
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography sx={{ display: 'inline', fontFamily:'Poppins' }} component="span" variant="body2" color="text.primary">
              The average client is losing 41 percent in the last 25 days
            </Typography>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemIcon>
          <ArrowRightOutlinedIcon style={{color:'black'}}/>
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography sx={{ display: 'inline', fontFamily:'Poppins' }} component="span" variant="body2" color="text.primary">
              Marketing intelligence they showed their client was priceless for him
            </Typography>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemIcon>
          <ArrowRightOutlinedIcon style={{color:'black'}}/>
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography sx={{ display: 'inline', fontFamily:'Poppins' }} component="span" variant="body2" color="text.primary">
              Marketing intelligence they showed their client was priceless for him
            </Typography>
          }
        />
      </ListItem>
    </List>
  );
};

export default KeyphraseList;
