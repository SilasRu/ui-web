import './SpeakerNetwork.css';
import _ from 'lodash';
import 'react-circular-progressbar/dist/styles.css';
import opts from '../../settings.json';
import Graph from 'react-graph-vis';
import { ITranscriptData } from 'src/Services/types';
import { toNetworkGraph } from 'src/Services/DataProcessing';

const SpeakerNetwork = (props: { transcriptData: ITranscriptData; currentTimeFrame: number | null }) => {

  let speakerSubset = null
  if (props.currentTimeFrame !== null) {
    const occuringSpeakers = props.transcriptData.keyphrases.dimensions.source_time_section[props.currentTimeFrame].match(/.\w+:/g)
    const uniqSpeakers = _.uniq(occuringSpeakers.map(i=>i.split(':')[0].trim()))
    speakerSubset = props.transcriptData.transcript.speaker_info.filter(i=>uniqSpeakers.includes(i.name)).map(i=>i.id)
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
