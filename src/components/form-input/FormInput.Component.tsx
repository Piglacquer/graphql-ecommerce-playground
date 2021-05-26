import React, { ChangeEventHandler, InputHTMLAttributes } from 'react';
import { InputHook } from '../../hooks/input/input-hook';  
import './formInput.styles.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	value: string,
	onChange: ChangeEventHandler<HTMLInputElement>,
	label: string,
	error?: Error,
}

type Error = {
	type?: string,
	message?: string,
}

const FormInput = ({ label, error, value, onChange }:Props) => (
	<div className='group'>
		<input className='form-input' value={value} onChange={onChange} />
		<div className='label-error-container'>
			{label
				? (<label className={`${value?.length ? 'shrink' : ''} form-input-label`}>
						{label}
					</label>)
				: null
			}
			{label && error?.message
				? (<span className={`${value.length ? 'shrink' : ''} form-input-label error`}>
						{label.toLowerCase() === error?.type && error?.message}
					</span>)
				: null
			}
		</div>
	</div>
);

export default FormInput;