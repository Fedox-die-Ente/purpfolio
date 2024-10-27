import React from 'react'
import {config} from "@/lib/config"
import Image from "next/image"
import Button from "@/components/Button"
import {EyeIcon, User2} from "lucide-react"
import {MESSAGES} from "@/lib/texts"

export default function Header() {
	return (
		<div className='flex flex-col items-center py-8'>
			<div
				className='flex flex-col md:flex-row py-6 md:py-12 gap-8 md:gap-16 lg:gap-36 items-center max-w-screen-xl mx-auto justify-center px-4 md:px-8 mt-5'>
				<div className='flex flex-col gap-4 md:gap-7 text-white text-center md:text-left'>
					<p className='text-2xl md:text-[2rem] font-semibold md:translate-y-5'>{MESSAGES.HEADER.HELLO}</p>
					<p className='text-3xl md:text-[3.25rem] font-semibold'>{config.FULL_NAME}</p>
					<p className='text-base md:text-[1.125rem] font-medium'>{config.SMALL_BIO}</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
						<Button label={MESSAGES.HEADER.ABOUT_ME} icon={<User2/>}/>
						<Button label={MESSAGES.HEADER.PROJECTS} variant='secondary' icon={<EyeIcon/>}/>
					</div>
				</div>

				<div className='flex flex-col items-center md:translate-y-12 mt-8 md:mt-0'>
					<div
						className='bg-primary/50 w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[526px] lg:h-[526px] rounded-full translate-y-5'></div>
					<Image
						unoptimized={true}
						src='/assets/images/portrait.png'
						alt='cool dude'
						width={486}
						height={486}
						className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-[350px] md:h-[350px] lg:w-[486px] lg:h-[486px] -translate-y-2 md:-translate-y-12 translate-x-5"
					/>
				</div>
			</div>
			<div className='w-full h-24 md:h-36 bg-midDark z-30 -mt-16 md:-mt-24'/>
		</div>
	)
}