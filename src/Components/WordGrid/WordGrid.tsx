import './WordGrid.css';
import _ from 'lodash';
import GridLayout from 'react-grid-layout';

const WordGrid = (props) => {
  // layout is an array of objects, see the demo for more complete usage
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 1, isResizable: false, static: true },
    { i: 'b', x: 1, y: 0, w: 1, h: 1, isResizable: false, static: true },
    { i: 'c', x: 2, y: 0, w: 1, h: 1, isResizable: false, static: true },
    { i: 'd', x: 0, y: 1, w: 1, h: 1, isResizable: false, static: true },
    { i: 'e', x: 1, y: 1, w: 1, h: 1, isResizable: false, static: true },
    { i: 'f', x: 2, y: 1, w: 1, h: 1, isResizable: false, static: true },
    // { i: "g", x: 0, y: 2, w: 1, h: 1, isResizable: false, static:true },
    // { i: "h", x: 1, y: 2, w: 1, h: 1, isResizable: false, static:true },
    // { i: "i", x: 2, y: 2, w: 1, h: 1, isResizable: false, static:true },
  ];

  return (
    <GridLayout className="word-grid" layout={layout} cols={3} rowHeight={120} width={500} isDraggable={false} isResizable={false} maxRows={2}>
      <div key="a" style={{ border: 'solid 1px #ddd' }}>
        {_.get(props.words, '[0].text', '')}
      </div>
      <div key="b" style={{ border: 'solid 1px #ddd' }}>
        {_.get(props.words, '[1].text', '')}
      </div>
      <div key="c" style={{ border: 'solid 1px #ddd' }}>
        {_.get(props.words, '[2].text', '')}
      </div>
      <div key="d" style={{ border: 'solid 1px #ddd' }}>
        {_.get(props.words, '[3].text', '')}
      </div>
      <div key="e" style={{ border: 'solid 1px #ddd' }}>
        {_.get(props.words, '[4].text', '')}
      </div>
      <div key="f" style={{ border: 'solid 1px #ddd' }}>
        {_.get(props.words, '[5].text', '')}
      </div>

      {/* <div key="g" style={{ background: "grey" }}>{_.get(props.words, '[6].text', '')}</div>
      <div key="h" style={{ background: "grey" }}>{_.get(props.words, '[7].text', '')}</div>
      <div key="i" style={{ background: "grey" }}>{_.get(props.words, '[8].text', '')}</div> */}
    </GridLayout>
  );
};

export default WordGrid;
