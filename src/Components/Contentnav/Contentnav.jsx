import React from 'react';
import './Contentnav.css';

const Contentnav = () => {
  return (
		<div className="contentnav">
			<div className="font-g">Showing x of y</div>
			<button className="content-back">
				<i className="fas fa-angle-left icon"></i>
			</button>
			<button className="content-forw">
				<i className="fas fa-angle-right icon"></i>
			</button>
		</div>
  )
}

export default Contentnav;
