import React from 'react';
import Sidenav from '../Sidenav/Sidenav';

class Content extends React.Component {
  render() {
    return (
      <div className="container"> 
        <div className="container-left">
          <Sidenav />
        </div>
        <div className="container-right">

        </div>
      </div>
    )
  }
}

export default Content;
