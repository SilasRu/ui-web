import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const ScrollDialog = (props) => {
  return (
    <Dialog className="scroll-dialog" open={props.open} onClose={props.handleClose} scroll="paper" fullWidth={true} maxWidth='md'>
      <DialogTitle className="scroll-dialog-title" sx={{ fontFamily: 'Poppins' }}>
        Transcript context
      </DialogTitle>
      <DialogContent dividers={true}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {props.contextTurns.map((i, key) => {
            return (
              <ListItem alignItems="flex-start" key={key}>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '0.95rem' }}>{i[0]}</Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '0.875rem' }} component="span" variant="body2" color="#00000099">
                        {i[1]}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default ScrollDialog;
