import React from 'react'
import {config} from "@/lib/config"

export default function Footer() {
	return (
		<footer className="py-8 md:py-14">
			<div
				className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-36 items-center justify-center px-4 text-center">
				{config.FOOTER_TEXTS.map((text, index) => (
					<p key={index} className="text-sm md:text-base font-medium text-white/50">{text}</p>
				))}
			</div>
			<p className="text-center text-xs md:text-sm text-primary/50 font-bold mt-4 md:mt-8">
				Made with <span className="text-purple-500">💜</span> by Fedox
			</p>
		</footer>
	)
}