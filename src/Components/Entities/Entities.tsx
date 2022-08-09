import './Entities.css';
import PolarAreaChart from './PolarArea';
import EntityChip from './EntityChip';
import { ITranscriptData } from 'src/Services/types';
import * as _ from 'lodash'
import React from 'react';

const Entities = (props: {transcriptData: ITranscriptData}) => {
  const entityGroups = _.groupBy(props.transcriptData.entities.entities, 'entity_group')
  entityGroups['Non-speaker PERS'] = entityGroups['PER'].filter(i=>!i.in_speakers)
  const [selectedEntities, setSelectedEntities] = React.useState<number>(0)

  return (
      <div className="entities">
        <div className="entities-top">
          <h1 className="entities-top-title">Entities</h1>
          <h1 className="entities-top-desc">Mentioned people, organizations or other entities</h1>
        </div>
        <div className="entities-bottom">
          <div className="entities-bottom-chart-wrapper">
            <div className="entities-bottom-chart">
              <PolarAreaChart entityGroups={entityGroups} setSelectedEntities={setSelectedEntities}/>
            </div>
            <EntityChip entityGroups={entityGroups} selectedEntities={selectedEntities}/>
          </div>
        </div>
      </div>
  );
};

export default Entities;
