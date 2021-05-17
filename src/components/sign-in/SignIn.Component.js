import React from 'react';
import FormInput from '../form-input/FormInput.Component.js';
import Button from '../button/Button.Component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { useInput } from '../../hooks/input-hook';

import './signIn.styles.scss';

const SignIn = () => {
	const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
	const { value: password, bind: bindPassword, reset: resetPassword } = useInput('')

	const handleSubmit = (event) => {
		event.preventDefault();
		resetEmail();
		resetPassword();
	};

	return (
		<div className='sign-in'>
			<h2 className='title'>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput label='Email' {...bindEmail} />
				<FormInput label='Password' {...bindPassword} />
				<div className='buttons'>
					<Button type='submit'>Sign In</Button>
					<Button onClick={signInWithGoogle} isGoogleSignin>Sign in with Google</Button>
				</div>
			</form>
		</div>
	)
}

export default SignIn;