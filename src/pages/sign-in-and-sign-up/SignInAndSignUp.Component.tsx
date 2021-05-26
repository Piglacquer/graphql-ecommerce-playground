import React from 'react';
import SignIn from '../../components/sign-in/SignIn.Component';
import SignUp from '../../components/sign-up/SignUp.Component';

import './signInAndSignUp.styles.scss';

const SignInAndSignUp:React.FC = () => (
	<div className='sign-in-and-sign-up'>
		<SignIn />
		<SignUp />
	</div>
);

export default SignInAndSignUp;