import React from 'react';
import './Sidenav.css';
import SidenavSubcateg from '../SidenavSubcateg/SidenavSubcateg';

const Sidenav = (props) => {
	const categories = Object.keys(props.categories);
	const arr = categories.map( (category, index) => {
		return <button key={index} className="categ">{category}</button>
	})

  return (
    <div className="sidenav flex-col">
			<div className="title font-g">ALL CATEGORIES</div> 
			{arr}
    </div>
  )
}

export default Sidenav;
