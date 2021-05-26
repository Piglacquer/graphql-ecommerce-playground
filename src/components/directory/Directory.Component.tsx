import React, { useState } from 'react';
import DIRECTORY_DATA from './directory.data';
import './directory.styles.scss';

import MenuItem from '../menu-item/MenuItem.Component';

const Directory:React.FC = () => {
	const [ sections, setSections ] = useState(DIRECTORY_DATA);
	
	return (
		<div className='directory-menu'>
			{sections.map(({id, ...sectionProps}) => (
					<MenuItem
						key={id}
						{...sectionProps}
					/>
				)
			)}
		</div>
	)
};

export default Directory;