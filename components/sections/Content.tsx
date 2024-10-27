'use client';
import React from 'react'
import {config} from "@/lib/config"
import SkillCard from "@/components/SkillCard"
import ServiceCard from "@/components/ServiceCard"
import ProjectCard from "@/components/ProjectCard"
import Contact from "@/components/sections/Contact"
import {MESSAGES} from "@/lib/texts"

export default function Content() {
	return (
		<div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-white flex flex-col gap-16 py-8'>
			<div id='about' className='flex flex-col gap-2'>
				<p className='text-2xl sm:text-3xl md:text-[2rem] font-semibold text-primary/50'>
					{MESSAGES.CONTENT.ABOUT_ME_TITLE}
				</p>
				<p className='text-base sm:text-lg md:text-[1.125rem] font-medium'>
					{config.ABOUT_ME}
				</p>
			</div>

			<div className='flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left'>
				<p className='text-4xl sm:text-5xl md:text-[6rem] font-semibold text-primary/50'>{config.EXPERIENCE.YEARS}+</p>
				<p className='font-medium text-xl sm:text-2xl md:text-[1.5rem]'>
					{config.EXPERIENCE.DESCRIPTION}
				</p>
			</div>

			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center justify-center'>
				{config.SKILLS.map((skill, index) => (
					<SkillCard key={index} title={skill.title} icon={skill.icon}/>
				))}
			</div>

			<div className='flex flex-col gap-4'>
				<p className='text-2xl sm:text-3xl md:text-[2rem] font-semibold text-primary/50'>
					{MESSAGES.CONTENT.SERVICES_TITLE}
				</p>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center'>
					{config.SERVICES.map((service, index) => (
						<ServiceCard
							key={index}
							icon={service.icon}
							title={service.title}
							description={service.description}
							highlighted={index % 2 === 1}
						/>
					))}
				</div>
			</div>

			<div id='projects' className='flex flex-col gap-4'>
				<p className='text-2xl sm:text-3xl md:text-[2rem] font-semibold text-primary/50'>
					{MESSAGES.CONTENT.FEATURED_PROJECTS}
				</p>
				<p className='text-base sm:text-lg md:text-[1.125rem] font-medium'>
					{MESSAGES.CONTENT.FEATURED_PROJECTS_DESC}
				</p>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center'>
					{config.PROJECTS.map((project, index) => (
						<ProjectCard
							key={index}
							image={project.image}
							title={project.title}
							description={project.description}
							github={project.github}
							view={project.view}
						/>
					))}
				</div>
			</div>

			<div id='contact' className='flex flex-col lg:flex-row gap-8 lg:gap-14'>
				<div className='lg:w-1/2'>
					<p className='text-2xl sm:text-3xl md:text-[2rem] font-semibold text-primary/50'>
						{MESSAGES.CONTENT.CONNECT_WITH_ME}
					</p>
					<p className='text-base sm:text-lg md:text-[1.125rem] font-medium mt-2'>
						{MESSAGES.CONTENT.CONNECT_WITH_ME_DESC}
					</p>
					<div className='flex flex-row gap-4 mt-4'>
						{/* Add your social media icons or links here */}
					</div>
				</div>
				<div className='lg:w-1/2'>
					<Contact/>
				</div>
			</div>
		</div>
	)
}