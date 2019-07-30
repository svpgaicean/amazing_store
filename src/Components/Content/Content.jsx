import React from 'react';
import Sidenav from '../Sidenav/Sidenav';
import Advertisment from '../Advertisment/Advertisment';
import ContentTitle from '../ContentTitle/ContentTitle';
import Contentnav from '../Contentnav/Contentnav';
import ContentDescription from '../ContentDescription/ContentDescription';
import ContentSort from '../ContentSort/ContentSort';
import ContentProducts from '../ContentProducts/ContentProducts';

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: {
				FACE: ['a', 'b', 'c', 'd'],
				BODY: ['e', 'f', 'g'],
				FOOT: ['h', 'i'],
				HANDS: ['j', 'k'],
				HAIR: ['l', 'm', 'n', 'o', 'p'],
				MAKEUP: ['q', 'r', 's'],
			},
		}
	}

  render() {
    return (
      <div className="container"> 
        <div className="container-left">
          <Sidenav
						categories={this.state.categories}
						disabled={false}
						hidden={false}
						title="All categories"
					/>
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
