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
        maxHeight: '250px',
        boxShadow: '2px 4px 10px 1px rgba(201, 201, 201, 0.47)',
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
