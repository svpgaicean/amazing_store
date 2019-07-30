import React from 'react';
import Sidenav from '../Sidenav/Sidenav';
import Advertisment from '../Advertisment/Advertisment';
import ContentTitle from '../ContentTitle/ContentTitle';
import Contentnav from '../Contentnav/Contentnav';
import ContentDescription from '../ContentDescription/ContentDescription';
import ContentSort from '../ContentSort/ContentSort';
import ContentProducts from '../ContentProducts/ContentProducts';

class Content extends React.Component {
  render() {
    return (
      <div className="container"> 
        <div className="container-left">
          <Sidenav />
					<Advertisment />
        </div>
        <div className="container-right">
					<div className="flex-row">
						<ContentTitle />
						<Contentnav />
					</div>
					<div className="flex-row">
						<ContentDescription />
						<ContentSort />
					</div>
					<hr />
					<div className="flex-content">
						<ContentProducts />
					</div>
        </div>
      </div>
    )
  }
}

export default Content;
