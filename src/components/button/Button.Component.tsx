import React, { ButtonHTMLAttributes } from 'react';

import './button.styles.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: any,
	isGoogleSignin?: boolean,
	otherButtonProps?: any,
}

const Button = ({ children, isGoogleSignin, type, ...otherButtonProps }: Props) => (
	<button className={`${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} type={type} {...otherButtonProps}>
		{children}
	</button>
);

export default Button;