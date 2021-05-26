import React from 'react';
import { withRouter, Link, RouteComponentProps } from 'react-router-dom';

import './menuItem.styles.scss';

interface MenuItem extends RouteComponentProps {
	title: string,
	imageUrl: string,
	linkUrl: string,
	size?: string,
}

const MenuItem = ({
	title,
	imageUrl,
	size,
	linkUrl,
	history,
	match,
}:MenuItem) => (
	<div
		className={`${size} menu-item`}
		onClick={() => history.push(`${match.url}${linkUrl}`)}
	>
		<div
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
			className='background-image'
		/>
		<div className='content'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<span className='subtitle'>SHOP NOW</span>
		</div>
	</div>
);

export default withRouter(MenuItem);