import React, { useState } from 'react';
import './header.css';

export const Header = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('all');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
    onFilter(event.target.value);
  };

  return (
    <div style={{
      padding: '10px',
      marginTop:'20px'
    }}>
    <div className="header">
      
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search movies..."
          className="search-input"
        />
      </div>
      <div className="filter-container">
        <h4>Sort By</h4>
        <select value={filterOption} onChange={handleFilterChange} className="filter-select">
          <option value="name">Name</option>
          <option value="dateLastEdited">Date Last Edited</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="horror">Horror</option>
        </select>
      </div>
    </div>
    </div>
  );
};

export default Header;
