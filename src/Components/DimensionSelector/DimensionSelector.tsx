import './DimensionSelector.css';

import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { blue } from '@mui/material/colors';

import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Select dimension</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem button onClick={() => handleListItemClick('Time dimension')} key={'Time dimension'}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: blue[100], color: 'black' }}>
              <AccessTimeOutlinedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={'Time dimension'} />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick('Speaker Dimension')} key={'Speaker Dimension'}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: blue[100], color: 'black' }}>
              <AccessibilityNewIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={'Speaker Dimension'} />
        </ListItem>
      </List>
    </Dialog>
  );
}

const DimensionSelector = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('Time dimension');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant='text' color='primary' onClick={handleClickOpen}>
        {selectedValue}
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
};

export default DimensionSelector;
