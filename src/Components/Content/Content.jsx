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
			categories: [],
			products: [], 
			togglecat: -1,
			togglesubcat: -1
		}
	}

	componentWillMount = async() => {
		let response;
		response = await fetch('/products');
		const products = await response.json();
		response = await fetch('/categories');
		const categories = await response.json();
		this.setState({products: products.data, categories: categories.data});
	}
	
	handleToggleCat = (catkey) => {
		this.setState({
			togglecat: catkey,
			togglesubcat: -1,
		});
	}

	handleToggleSubcat = (subcatkey) => {
		this.setState({togglesubcat: subcatkey});
	}

  render() {
    return (
      <div className="container"> 
        <div className="container-left">
          <Sidenav
						categories={this.state.categories}
						togglecat={this.state.togglecat}
						handleToggleCat={this.handleToggleCat}
						handleToggleSubcat={this.handleToggleSubcat}
					/>
					<Advertisment />
        </div>
        <div className="container-right">
					<div className="flex-row">
						<ContentTitle
							categories={this.state.categories}
							togglecat={this.state.togglecat}
							togglesubcat={this.state.togglesubcat}
						/>
						<Contentnav />
					</div>
					<div className="flex-row">
						<ContentDescription />
						<ContentSort />
					</div>
					<hr />
					<div className="flex-content">
						<ContentProducts products={this.state.products} />
					</div>
        </div>
      </div>
    )
  }
}

export default Content;
