import './KeyphraseList.css';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Highlighter from 'react-highlight-words';
import ScrollDialog from './ScrollDialog';

import { ITranscriptData } from 'src/Services/types';


const KeyphraseList = (props: { transcriptData: ITranscriptData; selectedKeyword: string | null; keyphrasesSelected: string[]; contextSelected: string[] }) => {
  const [open, setOpen] = React.useState(false);
  const [dialogueContent, setDialogueContent] = React.useState<string>('Lorem Ipsum');

  const handleClickOpen = (sentenceKey: number) => () => {
    setOpen(true);
    setDialogueContent(props.contextSelected[sentenceKey]);
  };
  const handleClose = () => setOpen(false);

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  const contextTurns = []
  const turns = dialogueContent.split(':')
  let currentSpeaker = turns[0].replace(/\s/g, "")
  
  for (const turn of turns.slice(1,)) {
    const splited = turn.trim().split(' ')
    const currentSentence = splited.slice(0, -1).join(' ').split('.').join('. ').split('?').join('? ').trim().replace(/\s+/g," ")
    contextTurns.push([currentSpeaker, currentSentence])
    currentSpeaker = splited.slice(-1)[0]
  }

  return (
    <List sx={{ width: '100%', maxWidth: '100%', overflow: 'auto', maxHeight: '260px', bgcolor: '#dddddd40', borderRadius: '10px' }}>
    <ScrollDialog open={open} handleClose={handleClose} contextTurns={contextTurns}/>
      {props.keyphrasesSelected.map((sentence, key) => {
        return (
          <div className="keyphrase-list-item" key={key}>
            <ListItem key={key} onClick={handleClickOpen(key)}>
              <ListItemText
                secondary={
                  <Highlighter
                    highlightClassName="keyphrase-list-item-highlighter"
                    searchWords={props.selectedKeyword ? props.selectedKeyword.split(' ') : []}
                    autoEscape={true}
                    highlightStyle={{
                      backgroundColor: 'white',
                      fontWeight: 'bold',
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
