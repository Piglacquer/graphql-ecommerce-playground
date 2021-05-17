import React from 'react';

import './button.styles.scss';

const Button = ({children, isGoogleSignin, ...otherButtonProps}) => (
	<button className={`${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} {...otherButtonProps}>
		{children}
	</button>
);

export default Button;