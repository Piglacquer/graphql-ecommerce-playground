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
				{collections.map(({ id, ...collectionProps })=> (
					<CollectionPreview key={id} {...collectionProps} />
				))}
			</div>
		)
	}
}

export default ShopPage;