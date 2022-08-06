import * as React from 'react';
import './TranscriptDropdown.css';
import scripts from '../../Assets/Data/Transcripts/transcript-list.json';
import SelectSearch from 'react-select-search';

const TranscriptDropdown = (props) => {
  const searchInput = React.useRef();
  const transcriptList = scripts.transcripts
  const options = transcriptList.map((i) => ({ name: i, value: i }));
  const [selectedTranscript, setSelectedTranscript] = React.useState<string>(null)

  const handleFilter = (items) => {
    return (searchValue) => {
      if (searchValue.length === 0) return options;
      return items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    };
  };
  const handleChange = (item) => {
    setSelectedTranscript(item);
    props.handleTranscriptImport(item)
  };
  return (
    <div className="transcript-dropdown">
      <SelectSearch
        ref={searchInput}
        filterOptions={handleFilter}
        options={options}
        search
        placeholder="Choose Transcript"
        onChange={handleChange}
        value={selectedTranscript}
      />
    </div>
  );
};

export default TranscriptDropdown;
