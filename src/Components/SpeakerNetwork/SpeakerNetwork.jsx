import React from "react";
import opts from '../../settings.json'
import Graph from "react-graph-vis";
import './SpeakerNetwork.css'

const SpeakerNetwork = (props) => {
  return (
    <div className="info-card-item">
      <Graph graph={props.speakerGraphData} options={opts.networkGraphOpts} />
    </div>
  );
};

export default SpeakerNetwork;
