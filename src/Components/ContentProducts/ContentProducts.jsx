import React from 'react';
import './ContentProducts.css';

const ContentProducts = (props) => {
		const items = props.products && props.products.map( (product) => {
		return (
			<div key={product.id} className="item">
				<img src={`/images/${product.id}.jpg`} className="item-img" alt="item-img" />
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
