import React from 'react';
import './SidenavSubcateg.css';

const SidenavSubcateg = (props) => {
	const subcategories = props.subcategories;
	
	const subcateg = subcategories.map( (subcateg, i) => {
	let subcatkey = Number((props.catkey + 1) + '' + i);
		return (
			<div key={subcatkey} className="subcateg">{subcateg}</div>
		)
	})

	return (
		<>{subcateg}</>
	)

}

export default SidenavSubcateg;
