import './KeyphraseList.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Highlighter from "react-highlight-words";

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
                secondary={
                  <Highlighter
                  highlightClassName="keyphrase-list-item-highlighter"
                  searchWords={props.selectedKeyword ? props.selectedKeyword.split(' ') : [] }
                  autoEscape={true}
                  highlightStyle={{
                    backgroundColor: 'white',
                    fontWeight: 'bold'
                  }}
                  textToHighlight={sentence}
                  />
                }
              />
            </ListItem>
          </div>
        );
      })}
    </List>
  );
};

export default KeyphraseList;
