import React from 'react'

interface Props {
	title: string
	icon: React.ReactNode
}

export default function SkillCard({title, icon}: Props) {
	return (
		<div className="w-full aspect-square bg-primary/20 hover:bg-primary/50 transition-all flex items-end p-4">
			<div className="flex flex-col items-start justify-center w-full">
				{React.cloneElement(icon as React.ReactElement, {
					className: 'text-white',
					size: 32,
				})}
				<p className="text-white font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 mb-2 uppercase">
					{title}
				</p>
			</div>
		</div>
	)
}