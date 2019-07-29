import React from 'react';
import './Searchbar.css';

const Searchbar = () => {
  return (
    <div className="searchbar">
      <i className="fas fa-search icon"></i>
      <input type="text" placeholder="Search products by SKU or name"/>
    </div>
  )
}

export default Searchbar;
