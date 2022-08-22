import './SpeakerNetwork.css';
import _ from 'lodash';
import 'react-circular-progressbar/dist/styles.css';
import opts from '../../settings.json';
import Graph from 'react-graph-vis';
import { ITranscriptData } from 'src/Services/types';
import { toNetworkGraph } from 'src/Services/dataProcessing';

const SpeakerNetwork = (props: { transcriptData: ITranscriptData; currentTimeFrame: number | null }) => {
  
  let lastStartIndex = 0;
  const turnsPerFrame = {};
  Object.keys(props.transcriptData.keyphrases.dimensions.source_time_section).forEach((key) => {
    const currLength = props.transcriptData.keyphrases.dimensions.source_time_section[key].split(':').length - 1;
    turnsPerFrame[key] = [lastStartIndex, currLength];
    lastStartIndex = lastStartIndex + currLength;
  });


  let speakerSubset = null
  if (props.currentTimeFrame !== null) {
    const turns = turnsPerFrame[props.currentTimeFrame];
    const filteredTimeframe = props.transcriptData.transcript.transcript.content[0].content.slice(turns[0], (turns[0] + turns[1]));
    speakerSubset = filteredTimeframe.map((i) => i?.attrs?.speakerId);
  }
  const speakerGraphData = toNetworkGraph(props.transcriptData.transcript, speakerSubset)

  return (
    <div className="speaker-network">
      <div className="speaker-network-top">
        <h1 className="speaker-network-top-title">Speaker Network</h1>
        <p className="speaker-network-top-desc">Interactions between the different speakers</p>
      </div>
      <div className="speaker-network-bottom">
        <div className="speaker-network-bottom-chart">
          <Graph graph={speakerGraphData} options={opts.networkGraphOpts} />
        </div>
      </div>
    </div>
  );
};

export default SpeakerNetwork;
