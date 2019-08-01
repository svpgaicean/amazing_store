import React from 'react';
import './ContentTitle.css';

const ContentTitle = (props) => {
	const subcateg = Object.values(props.categories)[props.togglecat];
	let title;

	if (subcateg && typeof subcateg === 'object') {
		title = Object.values(subcateg)[props.togglesubcat];
	}

  return (
		<div className="content-title">{title}</div>
	)
}

export default ContentTitle;
