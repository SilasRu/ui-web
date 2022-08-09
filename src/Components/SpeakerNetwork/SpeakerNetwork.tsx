import './SpeakerNetwork.css'
import 'react-circular-progressbar/dist/styles.css';
import opts from '../../settings.json';
import Graph from 'react-graph-vis';
import { ITranscriptData } from 'src/Services/types';
import { toNetworkGraph } from 'src/Services/dataProcessing';

function SpeakerNetwork(props: {transcriptData: ITranscriptData}) {
  const speakerGraphData = toNetworkGraph(props.transcriptData.transcript)
  return (
    <div className='speaker-network'>
      <div className="speaker-network-top">
        <h1 className='speaker-network-top-title'>Speaker Network</h1>
        <p className='speaker-network-top-desc'>Interactions between the different speakers</p>
      </div>
      <div className="speaker-network-bottom">
        <div className="speaker-network-bottom-chart">
          <Graph graph={speakerGraphData} options={opts.networkGraphOpts} />
        </div>
      </div>
    </div>
  )
}

export default SpeakerNetwork