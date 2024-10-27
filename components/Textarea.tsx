import React from 'react'

interface Props {
	id?: string;
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	disabled?: boolean;
	required?: boolean;
}

export default function Textarea({
									 id,
									 placeholder,
									 value,
									 onChange,
									 disabled = false,
									 required
								 }: Props) {
	return (
		<textarea
			required={required}
			id={id}
			className={'w-full p-4 bg-lightColour/10 rounded-lg text-white outline-none'}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			disabled={disabled}
		/>
	)
}
