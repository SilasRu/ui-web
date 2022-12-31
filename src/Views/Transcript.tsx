import React from 'react';
import Typography from '@mui/material/Typography';
import Navbar from 'src/Components/Navbar/Navbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Transcript = () => {
  const [transcriptData, setTranscriptData] = React.useState(null);

  React.useEffect(() => {
    import('../Assets/Data/Transcripts/ES2002b.json').then((res) => {
      setTranscriptData(res.default);
    });
  });
  if (transcriptData) {
    const speakerInfo = transcriptData.speaker_info;
    const transcriptTurns = transcriptData.transcript.content[0].content;

    return (
      <div>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {transcriptTurns.map((i, key) => {
            const speakerName = speakerInfo.find((x) => x.id === i.attrs.speakerId).name;
            const speakerText = i.content.map((x) => x.content[0].text).join(' ');
            return (
              <ListItem alignItems="flex-start" key={key}>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '0.95rem' }}>{speakerName}</Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '0.875rem' }} component="span" variant="body2" color="#00000099">
                        {speakerText}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
};

export default Transcript;
