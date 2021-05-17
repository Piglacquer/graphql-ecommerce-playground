import React from 'react';

import './formInput.styles.scss';

const FormInput = ({ label, ...inputProps }) => (
	<div className='group'>
		<input className='form-input' {...inputProps}/>
		{label
			? (<label className={`${inputProps.value.length ? 'shrink' : ''} form-input-label`}>
					{label}
				</label>)

			: null
		}
	</div>
);

export default FormInput;