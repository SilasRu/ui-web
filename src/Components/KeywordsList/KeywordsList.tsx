import React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const KeywordsList = (props) => {
  return (
    <Paper
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
            <Chip label={data} variant="outlined" />
          </ListItem>
        );
      })}
    </Paper>
  );
};

export default KeywordsList;
