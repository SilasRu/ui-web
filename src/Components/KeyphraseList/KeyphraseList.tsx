import './KeyphraseList.css';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Highlighter from 'react-highlight-words';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ITranscriptData } from 'src/Services/types';

const KeyphraseList = (props: { transcriptData: ITranscriptData; selectedKeyword: string | null; keyphrasesSelected: string[]; contextSelected: string[] }) => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');
  const [dialogueContent, setDialogueContent] = React.useState<string>('Lorem Ipsum');

  const handleClickOpen = (scrollType: DialogProps['scroll'], sentenceKey: number) => () => {
    setOpen(true);
    setScroll(scrollType);
    setDialogueContent(props.contextSelected[sentenceKey])
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
  console.log(props.transcriptData.transcript)
  return (
    <List sx={{ width: '100%', maxWidth: '100%', overflow: 'auto', maxHeight: '260px', bgcolor: '#dddddd40', borderRadius: '10px' }}>
      <Dialog className="scroll-dialog" open={open} onClose={handleClose} scroll={scroll}>
        {/* <DialogTitle className="scroll-dialog-title" sx={{ fontFamily: 'Poppins' }}>
          Subscribe
        </DialogTitle> */}
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText className="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1} sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '0.875rem' }}>
            {dialogueContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
      {props.keyphrasesSelected.map((sentence, key) => {
        return (
          <div className="keyphrase-list-item" key={key}>
            <ListItem key={key} onClick={handleClickOpen('body', key)}>
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
