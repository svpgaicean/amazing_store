import React from 'react';
import './Sidenav.css';
import SidenavSubcateg from '../SidenavSubcateg/SidenavSubcateg';

const Sidenav = (props) => {
	const categories = props.categories.map(category => category.name);
	const subcategories = props.categories.map(item => item.subcategories);

	let subcatnames = [];
	for (let i = 0; i < subcategories.length; i++) {
		let currentarr = subcategories[i];
		let newarr = [];
		for (let j = 0; j < currentarr.length; j++) {
			newarr.push(currentarr[j].name);
		}
		subcatnames.push(newarr);
	}

	const categ = categories.map( (category, index) => {
		return (
			<div key={index} className="categ" onClick={() => props.handleToggleCat(index)}>{category} 
			{
				props.togglecat === index &&
				<SidenavSubcateg
					catkey={index}
					subcategories={subcatnames[index]}
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
