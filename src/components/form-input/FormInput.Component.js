import React from 'react';

import './formInput.styles.scss';

const FormInput = ({ label, ...inputProps }) => (
	<div className='group'>
		<input className='form-input' {...inputProps}/>
		<div className='label-error-container'>
			{label
				? (<label className={`${inputProps.value.length ? 'shrink' : ''} form-input-label`}>
						{label}
					</label>)
				: null
			}
			{label && inputProps?.error?.message
				? (<span className={`${inputProps.value.length ? 'shrink' : ''} form-input-label error`}>
						{label.toLowerCase() === inputProps.error?.type && inputProps.error?.message}
					</span>)
				: null
			}
		</div>
	</div>
);

export default FormInput;