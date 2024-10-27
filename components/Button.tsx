import React from 'react'

const getVariant = (variant: 'primary' | 'secondary') => {
	switch (variant) {
		case 'primary':
			return 'px-6 py-3 border-2 border-primary/10 bg-primary/50 rounded-md text-white items-center hover:bg-primary/70 transition-all';
		case 'secondary':
			return 'px-6 py-3 border-2 border-primary/50 rounded-md text-white items-center hover:bg-primary/50 transition-all';
	}
}

interface Props {
	label: string;
	onClick?: () => void;
	disabled?: boolean;
	icon?: React.ReactNode;
	variant?: 'primary' | 'secondary';
}

export default function Button({
								   label, onClick, disabled = false, icon, variant = 'primary'
							   }: Props) {
	return (
		<button onClick={onClick} className={getVariant(variant)} disabled={disabled}>
			<div className={'flex flex-row gap-2'}>
				{label}
				{icon}
			</div>
		</button>
	)
}
