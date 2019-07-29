import React from 'react';
import './Sidenav.css';
import Sidenav_subcateg from '../Sidenav_subcateg/Sidenav_subcateg';

const Sidenav = () => {
  return (
    <div className="sidenav flex-col">
      <div className="title font-g">ALL CATEGORIES</div>
        <div className="categ">CAT1</div>
					<Sidenav_subcateg />
        <div className="categ">CAT2</div>
        <div className="categ">CAT3</div>
        <div className="categ">CAT4</div>
        <div className="categ">CAT5</div>
    </div>
  )
}

export default Sidenav;
