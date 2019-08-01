import React from 'react';
import './ContentProducts.css';

/* currently maps to "All Categories"
	implementation needs to handle mapping for specific Categories/Subcategories
	*/
const ContentProducts = (props) => {
		const items = props.products && props.products.map( (product) => {
		return (
			<div key={product.id} className="item">
				<img src={product.img} className="item-img" alt="item-img" />
				<div className="item-name">{product.name}</div>
				<div className="item-price">{product.price}</div>
			</div>
			)
		})

		return (
			<div className="flex-content">
				{items}
			</div>
		)
}

export default ContentProducts;
