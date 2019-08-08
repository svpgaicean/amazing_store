import React from 'react';
import './SidenavSubcateg.css';

const SidenavSubcateg = (props) => {
	const subcategories = props.subcategories;
	const subcateg = subcategories.map( (subcateg, i) => {
	let subcatkey = Number(props.catkey + '' + i);
		return (
			<div
				key={subcatkey}
				className="subcateg"
				onClick={(e) => {
					props.handleToggleSubcat(i)
					e.stopPropagation();
				}
				}>
				{subcateg}
				</div>
		)
	})

	return (
		<>{subcateg}</>
	)

}

export default SidenavSubcateg;
