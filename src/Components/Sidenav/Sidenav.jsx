import React from 'react';
import './Sidenav.css';
import SidenavSubcateg from '../SidenavSubcateg/SidenavSubcateg';
// import SidenavSubcateg from '../SidenavSubcateg/SidenavSubcateg';

const Sidenav = (props) => {
	const categories = Object.keys(props.categories);	
	const subcategories = Object.values(props.categories);

	const categ = categories.map( (category, index) => {
		let catkey = index + 1;
		return (
			<div key={catkey} className="categ" onClick={() => props.handleToggle(catkey)}>{category} 
			{
				props.toggle !== 0 && props.toggle === catkey &&
				<>
					{subcategories[index].map( (subcateg, i) => {
						let subcatkey = Number((index + 1) + '' + i);
						return (
							<div key={subcatkey} className="subcateg">{subcateg}</div>
						)
				})}
				</>	
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
