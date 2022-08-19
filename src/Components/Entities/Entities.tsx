import './Entities.css';
import PolarAreaChart from './PolarArea';
import EntityChip from './EntityChip';
import { ITranscriptData } from 'src/Services/types';
import * as _ from 'lodash';
import React from 'react';

const Entities = (props: { transcriptData: ITranscriptData; currentTimeFrame: number | null; setSelectedEntities: (number) => void; selectedEntities: number | null }) => {
  let entityGroups;
  if (props.currentTimeFrame !== null) {
    entityGroups = _.groupBy(props.transcriptData.entities.dimensions.time[props.currentTimeFrame], 'entity_group');
  } else {
    entityGroups = _.groupBy(props.transcriptData.entities.entities, 'entity_group');
  }
  if ('PER' in entityGroups) entityGroups['Non-speaker PERS'] = entityGroups['PER'].filter((i) => !i.in_speakers);
  console.log(entityGroups)
  return (
    <div className="entities">
      <div className="entities-top">
        <h1 className="entities-top-title">Entities</h1>
        <h1 className="entities-top-desc">Mentioned people, organizations or other entities</h1>
      </div>
      <div className="entities-bottom">
        <div className="entities-bottom-chart-wrapper">
          <div className="entities-bottom-chart">
            <PolarAreaChart entityGroups={entityGroups} setSelectedEntities={props.setSelectedEntities} />
          </div>
          <EntityChip entityGroups={entityGroups} selectedEntities={props.selectedEntities} />
        </div>
      </div>
    </div>
  );
};

export default Entities;
