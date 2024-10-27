'use client'

import React, {useState} from 'react'
import {config} from "@/lib/config"
import {MESSAGES} from "@/lib/texts"
import {Menu, X} from 'lucide-react'

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => setIsOpen(!isOpen)

	return (
		<div className='bg-midDark bg-opacity-50 backdrop-blur-lg w-full p-4 text-white fixed z-50'>
			<div className='flex flex-row px-4 md:px-12 items-center justify-between'>
				<p className='font-semibold text-[1.75rem] text-primary/50'>{config.NAME}</p>

				{/* Hamburger menu for mobile */}
				<button className='md:hidden' onClick={toggleMenu}>
					{isOpen ? <X size={24}/> : <Menu size={24}/>}
				</button>

				{/* Desktop menu */}
				<div className='hidden md:flex flex-row gap-10'>
					{MESSAGES.NAVBAR_LINKS.map((link, index) => (
						<a
							key={index}
							href={link.href}
							className='text-lg font-semibold text-white hover:text-primary/50 transition-all'
						>
							{link.name}
						</a>
					))}
				</div>
			</div>

			{/* Mobile dropdown menu */}
			{isOpen && (
				<div className='md:hidden mt-4 flex flex-col gap-4'>
					{MESSAGES.NAVBAR_LINKS.map((link, index) => (
						<a
							key={index}
							href={link.href}
							className='text-lg font-semibold text-white hover:text-primary/50 transition-all'
							onClick={toggleMenu}
						>
							{link.name}
						</a>
					))}
				</div>
			)}
		</div>
	)
}