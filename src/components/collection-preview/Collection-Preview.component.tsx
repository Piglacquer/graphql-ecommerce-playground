import React from 'react';
import CollectionItem from '../collection-item/Collection-Item.Component';
import type { Props } from './collection-preview.types';
import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}: Props) => (
	<div className='collection-preview'>
		<h1 className='title'>{title}</h1>
		<div className='preview'>
			{items
				.filter((item, index) => index <= 3)
				.map(({ id, ...collectionItemProps}) => (
					<CollectionItem key={id} {...collectionItemProps} />
				))
			}
		</div>
	</div>
);

export default CollectionPreview