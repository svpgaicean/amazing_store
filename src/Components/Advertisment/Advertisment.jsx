import React from 'react';
import './Advertisment.css';
import Image from '../../Images/460095802.jpg'

const Advertisment = () => {
  return (
		<div className="adv flex-col">
			<img src={Image} className="adv-img"></img>
		</div>
  )
}

export default Advertisment;
