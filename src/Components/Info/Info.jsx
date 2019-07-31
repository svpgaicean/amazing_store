import React from 'react';
import './Info.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Info = () => {
  return (
    <>
      <div>
        <i className="fas fa-map-marker-alt icon"></i>
        <span>My city: <button className="font-b">Dummy Name</button></span>
      </div>
      <div>
        <i className="far fa-address-book icon"></i>
        <span>8 800 505-04-83</span>
      </div>
    </>
  )
}

export default Info;
