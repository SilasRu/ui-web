import './SpeakerNetwork.css';
import _ from 'lodash';
import 'react-circular-progressbar/dist/styles.css';
import opts from '../../settings.json';
import Graph from 'react-graph-vis';
import { ITranscriptData } from 'src/Services/types';
import { toNetworkGraph } from 'src/Services/dataProcessing';

function SpeakerNetwork(props: { transcriptData: ITranscriptData; currentTimeFrame: number | null }) {
  const transcriptCopy = _.cloneDeep(props.transcriptData.transcript)
  // if (props.currentTimeFrame !== null) {
  //   const filteredTimeframe = transcriptCopy.transcript.content[0].content.filter(
  //     (i) => i.content[0].attrs.startTime > (props.currentTimeFrame -1) * 60 && i.content.slice(-1)[0].attrs.endTime < (props.currentTimeFrame + 2) * 60
  //   );
  //   transcriptCopy.transcript.content[0].content = filteredTimeframe
  //   const allSpeakers = filteredTimeframe.map(i=>i.attrs.speakerId)
  //   transcriptCopy.speaker_info = transcriptCopy.speaker_info.filter(f=>allSpeakers.includes(f.id))
  // }

  const speakerGraphData = toNetworkGraph(transcriptCopy);
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
}

export default SpeakerNetwork;
