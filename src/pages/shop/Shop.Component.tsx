import React, { useState } from 'react';

import CollectionPreview from '../../components/collection-preview/Collection-Preview.component';
import SHOP_DATA from './shop.data.js';

const ShopPage: React.FC = () => {
	const [ collections, setCollections ] = useState(SHOP_DATA);
	return (
		<div>
			{collections.map(({ id, ...collectionProps })=> (
				<CollectionPreview key={id} {...collectionProps} />
			))}
		</div>
	);
};


export default ShopPage;