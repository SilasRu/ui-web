import React from 'react';
import './TranscriptDropdown.css';
import SelectSearch from 'react-select-search';

const TranscriptDropdown = (props) => {
  const searchInput = React.useRef();
  const options = props.transcriptList.map((i) => ({ name: i, value: `${i}.json` }));
  const [selectedTranscript, setSelectedTranscript] = React.useState(null)

  const handleFilter = (items) => {
    return (searchValue) => {
      if (searchValue.length === 0) return options;
      return items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    };
  };
  const handleChange = (item) => {
    setSelectedTranscript(item);
  };
  console.log(selectedTranscript)
  return (
    <div className="transcript-dropdown">
      <SelectSearch ref={searchInput} filterOptions={handleFilter} options={options} search placeholder="Choose Transcript" onChange={handleChange} value={selectedTranscript}/>
    </div>
  );
};

export default TranscriptDropdown;
