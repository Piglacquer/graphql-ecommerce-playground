import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signOut } from '../../firebase/firebase.utils'; 
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser }) => (
	<div className='header'>
		<Link to='/' className='logo-container'>
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link to='/shop' className='option'>
				Shop
			</Link>
			<Link to='/cart' className='option'>
				Cart
			</Link>
			{ 
				currentUser
				? <div className='option' onClick={() => signOut()}>Sign Out</div> 
				: <Link to='/signin' className='option'>Sign In</Link>
			}
		</div>
	</div>
);

export default withRouter(Header);