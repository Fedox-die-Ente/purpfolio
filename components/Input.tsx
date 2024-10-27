import React from 'react'

interface Props {
	id?: string;
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
	type?: string;
	required?: boolean;
}

export default function Input({
								  id,
								  placeholder,
								  value,
								  onChange,
								  disabled = false,
								  type = 'text',
								  required
							  }: Props) {
	return (
		<input
			required={required}
			id={id}
			className={'w-full p-4 bg-lightColour/10 rounded-lg text-white outline-none'}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			disabled={disabled}
			type={type}
		/>
	)
}
