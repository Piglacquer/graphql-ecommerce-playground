import React from 'react';
import FormInput from '../form-input/FormInput.Component';
import Button from '../button/Button.Component';
import { signInWithGoogle, signInWithEmailAndPassword } from '../../firebase/firebase.utils';
import { useInput } from '../../hooks/input/input-hook';

import './signIn.styles.scss';

const SignIn:React.FC = () => {
	const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
	const { value: password, bind: bindPassword, reset: resetPassword } = useInput('')

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		signInWithEmailAndPassword({email, password});
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
					<Button type='button' onClick={signInWithGoogle} isGoogleSignin>Sign in with Google</Button>
				</div>
			</form>
		</div>
	)
}

export default SignIn;