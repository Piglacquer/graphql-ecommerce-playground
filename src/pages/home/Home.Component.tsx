import React from 'react';
import './home.styles.scss';
import Directory from '../../components/directory/Directory.Component';

const HomePage:React.FC = () => (
	<div className='homepage'>
		<Directory />
	</div>
);

export default HomePage;