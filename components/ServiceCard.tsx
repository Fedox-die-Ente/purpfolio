'use client';

import React from 'react';

interface Props {
	icon: React.ReactNode;
	title: string;
	description: string;
	highlighted?: boolean;
}

export default function ServiceCard({
										icon,
										title,
										description,
										highlighted = false
									}: Props) {
	return (
		<div className={`w-full h-full border-2 rounded-lg ${highlighted ? 'border-white' : 'border-primary/50'}`}>
			<div className="flex flex-col items-center justify-center px-8 py-20 text-center">
				{React.cloneElement(icon as React.ReactElement, {
					className: 'text-white',
					size: 48
				})}
				<h3 className={`font-semibold text-2xl mt-2 ${highlighted ? 'text-primary' : 'text-white'}`}>
					{title}
				</h3>
				<p className="text-white text-lg mt-2">{description}</p>
			</div>
		</div>
	);
}