import React, { useState } from 'react';
import './App.css';

const Dropdown = ({ items }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleItemClick = () => {
    setShowDropdown(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={handleButtonClick}>
        Select
      </button>
      {showDropdown && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index} onClick={handleItemClick}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const App = () => {
  const items = ['Yes', 'Probabaly not'];

  return (
    <div className="App">
      <h1>Should you use a Dropdown ?</h1>
      <Dropdown items={items} />
    </div>
  );
};

export default App;