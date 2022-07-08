import React from 'react';
import './Dropdown.css';
import SelectSearch from 'react-select-search';


const Dropdown = () => {
  const searchInput = React.useRef();
  const options = [
    { name: 'Workshop Three', value: '1' },
    { name: 'Workshop Two', value: '2' },
    { name: 'Workshop Three', value: '3' },
    { name: 'Workshop Four', value: '4' },
    { name: 'Workshop Five', value: '5' },
  ];

  const handleFilter = (items) => {
    return (searchValue) => {
      if (searchValue.length === 0) return options;
      return items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    };
  };

  const handleChange = (...args) => {
    // searchInput.current.querySelector("input").value = "";
    console.log('ARGS:', args);
    console.log('CHANGE:');
  };
  return (
    <div className="tests">
      <SelectSearch ref={searchInput} filterOptions={handleFilter} options={options} search placeholder="Choose your language" onChange={handleChange} />
    </div>
  );
};

export default Dropdown;
