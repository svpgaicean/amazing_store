import React from 'react';
import './Sidenav.css';
import SidenavSubcateg from '../SidenavSubcateg/SidenavSubcateg';

const Sidenav = (props) => {
	const categories = Object.keys(props.categories);	
	const subcategories = Object.values(props.categories);

	const categ = categories.map( (category, index) => {
		return (
			<div key={index} className="categ" onClick={() => props.handleToggleCat(index)}>{category} 
			{
				props.togglecat === index &&
				<SidenavSubcateg
					catkey={index}
					subcategories={subcategories[index]}
					togglesubcat={props.togglesubcat}
					handleToggleSubcat={props.handleToggleSubcat}
				/>
			}
			</div>
		)
	})

  return (
    <div className="sidenav flex-col">
			<div className="title font-g">ALL CATEGORIES</div> 
			{categ}
    </div>
  )
}

export default Sidenav;
