import './Entities.css';
import PolarAreaChart from './PolarArea';
import EntityChip from './EntityChip';

const Entities = () => {
  return (
    <div className="entities">
      <div className="entities-top">
        <h1 className="entities-top-title">Entities</h1>
        <h1 className="entities-top-desc">Mentioned people, organizations or other entities</h1>
      </div>
      <div className="entities-bottom">
        <div className="entities-bottom-chart-wrapper">
          <div className="entities-bottom-chart">
            <PolarAreaChart />
          </div>
          <EntityChip/>
        </div>
      </div>
    </div>
  );
};

export default Entities;
