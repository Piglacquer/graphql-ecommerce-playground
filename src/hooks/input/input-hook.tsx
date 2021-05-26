import { useState } from 'react';

type Input = {
	value: string,
	setValue: Function,
	reset: Function,
	bind: object
};

const useInput = (initialValue: string): Input => {
	const [ value, setValue ] = useState(initialValue);

	return {
		value,
		setValue,
		reset: () => setValue(''),
		bind: {
			value,
			onChange: (event: any) => {
				setValue(event.target.value);
			}
		}
	}
};

export { useInput };