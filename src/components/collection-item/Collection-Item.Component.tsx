import React from 'react';
import type { CollectionItem_ } from '../collection-preview/collection-preview.types';
import './collectionItem.styles.scss';

const CollectionItem = ({ name, imageUrl, price }: CollectionItem_) => (
	<div className='collection-item'>
		<div
			className='image'
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		/>
		<div className='collection-footer'>
			<span className='name'>{name}</span>
			<span className='price'>{price}</span>
		</div>
	</div>
);

export default CollectionItem;