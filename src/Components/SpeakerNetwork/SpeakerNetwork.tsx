import './SpeakerNetwork.css'
import 'react-circular-progressbar/dist/styles.css';
import opts from '../../settings.json';
import Graph from 'react-graph-vis';
const props = {
  speakerGraphData: {
    nodes: [
      {
        id: 1,
        label: 'Silas',
        color: '#03045e',
        value: 30.500000000000014,
      },
      {
        id: 2,
        label: 'Flavia',
        color: '#023e8a',
        value: 36.099999999999966,
      },
      {
        id: 3,
        label: 'Ivan',
        color: '#0077b6',
        value: 29,
      },
      {
        id: 4,
        label: 'Marco',
        color: '#0096c7',
        value: 719.5999999999998,
      },
      {
        id: 5,
        label: 'Philipp',
        color: '#00b4d8',
        value: 176.8000000000001,
      },
      {
        id: 6,
        label: 'Luca',
        color: '#48cae4',
        value: 43.30000000000001,
      },
      {
        id: 7,
        label: 'Djuradj',
        color: '#90e0ef',
        value: 19.700000000000003,
      },
    ],
    edges: [
      {
        from: 1,
        to: 4,
        value: 2,
        color: {
          opacity: 0.2,
        },
        id: '918a3089-c2c9-421a-bbc7-9ef84a8c2baa',
      },
      {
        from: 1,
        to: 5,
        value: 4,
        color: {
          opacity: 0.2,
        },
        id: 'c19b7666-9dce-49dc-b0c1-07368bdcf603',
      },
      {
        from: 2,
        to: 4,
        value: 2,
        color: {
          opacity: 0.2,
        },
        id: 'b2989850-7fcb-417c-865e-cb885754a27a',
      },
      {
        from: 2,
        to: 5,
        value: 2,
        color: {
          opacity: 0.2,
        },
        id: '5d2af888-fc7f-49dc-b1da-9b7c2701ad0b',
      },
      {
        from: 3,
        to: 5,
        value: 2,
        color: {
          opacity: 0.2,
        },
        id: '086f08a6-c3e7-4420-9ab9-60b033f181d5',
      },
      {
        from: 4,
        to: 1,
        value: 2,
        color: {
          opacity: 0.2,
        },
        id: 'f7e6ecce-83ad-4fdb-ab1e-2176cc95f5ce',
      },
      {
        from: 4,
        to: 2,
        value: 2,
        color: {
          opacity: 0.2,
        },
        id: 'ec52f118-799f-49b9-bdab-9cd57b11562a',
      },
      {
        from: 4,
        to: 5,
        value: 2,
        color: {
          opacity: 0.2,
        },
        id: '764f625b-34be-4da2-9314-7b15e382a668',
      },
      {
        from: 5,
        to: 1,
        value: 4,
        color: {
          opacity: 0.2,
        },
        id: 'f9e9dbdf-37ec-434f-bcf6-2b5424d8d70c',
      },
      {
        from: 5,
        to: 2,
        value: 2,
        color: {
          opacity: 0.2,
        },
        id: '1e018509-bb17-47f8-9557-7c443542c59a',
      },
      {
        from: 5,
        to: 3,
        value: 1,
        color: {
          opacity: 0.2,
        },
        id: '24c9d192-a05e-4910-9047-ff2db5a37561',
      },
      {
        from: 5,
        to: 4,
        value: 3,
        color: {
          opacity: 0.2,
        },
        id: '255df600-e9e1-49ee-aa04-464d57fb2c3f',
      },
      {
        from: 5,
        to: 6,
        value: 2,
        color: {
          opacity: 0.2,
        },
        id: '8cd2eec3-75d7-42ae-9d07-67f4a21b2266',
      },
      {
        from: 5,
        to: 7,
        value: 2,
        color: {
          opacity: 0.2,
        },
        id: '5a972387-93ca-43c4-9873-9455ec1a2afb',
      },
      {
        from: 6,
        to: 5,
        value: 2,
        color: {
          opacity: 0.2,
        },
        id: 'f1d7f5ab-7ca9-47c6-ad0c-aa82f9c42f3e',
      },
      {
        from: 7,
        to: 5,
        value: 2,
        color: {
          opacity: 0.2,
        },
        id: '93ff6f04-61dd-4c1a-b2e4-b406dd08169d',
      },
    ],
  },
};



function SpeakerNetwork() {
  return (
    <div className='speaker-network'>
      <div className="speaker-network-top">
        <h1 className='speaker-network-top-title'>Speaker Network</h1>
        <p className='speaker-network-top-desc'>Interactions between the different speakers</p>
      </div>
      <div className="speaker-network-bottom">
        <div className="speaker-network-bottom-chart">
          <Graph graph={props.speakerGraphData} options={opts.networkGraphOpts} />
        </div>
      </div>
    </div>
  )
}

export default SpeakerNetwork