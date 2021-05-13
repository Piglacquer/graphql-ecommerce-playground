import React, { Component } from 'react';

import CollectionPreview from '../../components/collection-preview/Collection-Preview.component';
import SHOP_DATA from './shop.data.js';

class ShopPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		const { collections } = this.state;

		return (
			<div>
				{collections.map(({ title, items })=> (
					<CollectionPreview title={title} items={items} />
				))}		
			</div>
		)
	}
}

export default ShopPage;