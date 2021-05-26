import React from 'react';
import { RouteComponentProps, Link, withRouter } from 'react-router-dom';
import { signOut } from '../../firebase/firebase.utils'; 
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { User } from '@firebase/auth-types';
import './header.styles.scss';

interface Props extends RouteComponentProps {
	currentUser: User | null,
};

const Header:React.FC<Props> = ({ currentUser }) => (
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