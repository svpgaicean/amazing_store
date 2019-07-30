import React from 'react';
import './Sidenav.css';
import SidenavSubcateg from '../SidenavSubcateg/SidenavSubcateg';

const Sidenav = () => {
  return (
    <div className="sidenav flex-col">
      <div className="title font-g">ALL CATEGORIES</div>
        <div className="categ">CAT1</div>
					<SidenavSubcateg />
        <div className="categ">CAT2</div>
        <div className="categ">CAT3</div>
        <div className="categ">CAT4</div>
        <div className="categ">CAT5</div>
    </div>
  )
}

export default Sidenav;
