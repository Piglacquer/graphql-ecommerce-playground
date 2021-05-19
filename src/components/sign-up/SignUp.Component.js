import React, { useState } from 'react';
import Button from '../button/Button.Component';
import FormInput from '../form-input/FormInput.Component';
import { useInput } from '../../hooks/input-hook';
import { createUserWithEmailAndPassword, createUserProfileDocument } from '../../firebase/firebase.utils';

import './signUp.styles.scss';

const errorDictionary = (errorType) => {
	switch(errorType) {
		case 'auth/weak-password': {
			return 'password';
		}
		case 'password mismatch': {
			return 'confirm password';
		}
		case 'auth/email-already-in-use': {
			return 'email';
		}
		case 'auth/invalid-email': {
			return 'email';
		}
		default: return errorType;
	}
}

const SignUp = () => {
	const { value: displayName, bind: bindDisplayName, reset: resetDisplayName } = useInput('');
	const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
	const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');
	const { value: confirmPassword, bind: bindConfirmPassword, reset: resetConfirmPassword } = useInput('');
	const [ { message, type }, setError ] = useState({
		message: undefined,
		type: undefined,
	});
	const resetError = () => setError({ message: undefined, type: undefined})
	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			return setError({message: "Passwords don't match", type: errorDictionary('password mismatch')});
		}

		try {
			createUserWithEmailAndPassword({ email, password })
				.then(({user}) => {
					if (user) {
						createUserProfileDocument(user, {displayName});
					} 
				})
				.then(() => {
					resetDisplayName();
					resetEmail();
					resetPassword();
					resetConfirmPassword();
					resetError();
				})
				.catch(error => {
					console.warn('yeet error', error);
					setError({ message: error.message, type: errorDictionary(error.code)})
				})
		} catch (error) {
			console.warn('error signing up: ', error);
		}
	};

	return (
		<div className='sign-up'>
			<h2 className='title'>I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput type='text' label='Display Name' required {...bindDisplayName} />
				<FormInput type='email' label='Email' error={{message, type}} required {...bindEmail} />
				<FormInput type='password' label='Password' error={{message, type}} required {...bindPassword} />
				<FormInput type='password' label='Confirm Password' error={{message, type}} required {...bindConfirmPassword} />
				<Button type='submit'>Sign Up</Button>
			</form>
		</div>
	)
};

export default SignUp;