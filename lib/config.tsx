import {CodeIcon, GitBranchIcon, GlobeIcon, PackageIcon, PencilIcon, SmartphoneIcon, WormIcon} from "lucide-react";
import React from "react";

export const config = {
	NAME: "Jayjay Dinero",
	FULL_NAME: "Jayjay D. Dinero",
	SMALL_BIO: "Transforming the web one line of code at a time: Crafting cutting-edge digital experiences with precision, passion, and a profound commitment to excellence",
	ABOUT_ME: "Hi, my name is Jayjay Dinero Dinero, I am a Fullstack web developer, UI designer, and Mobile developer. I have honed my skills in Web Development and have a core understanding of advanced UI design principles. Here are the major skills I have.",

	EXPERIENCE: {
		YEARS: 5,
		DESCRIPTION: "Years of experience. Specialised in building apps, while ensuring a seamless web experience for end users."
	},

	SKILLS: [
		{
			title: "UI & UX DESIGNING",
			icon: <PencilIcon/>
		},
		{
			title: "WEB DEVELOPMENT",
			icon: <GlobeIcon/>
		},
		{
			title: "MOBILE DEVELOPMENT",
			icon: <SmartphoneIcon/>
		},
		{
			title: "WEB SCRAPING WITH PYTHON",
			icon: <WormIcon/>
		}
	],

	SERVICES: [
		{
			icon: <PencilIcon/>,
			title: "UI & UX DESIGNING",
			description: "I design beautiful web interfaces with Figma and Adobe XD"
		},
		{
			icon: <CodeIcon/>,
			title: "WEB DEVELOPMENT",
			description: "I create beautiful interfaces with simple HTML, CSS, & JavaScript, and also frameworks like Angular and ReactJS"
		},
		{
			icon: <SmartphoneIcon/>,
			title: "MOBILE DEVELOPMENT",
			description: "I am an expert mobile developer. I have experience using Flutter and React Native."
		},
		{
			icon: <GitBranchIcon/>,
			title: "VERSION CONTROL",
			description: "I can use version control systems well, and Git & Mercurial are my go-to tools."
		},
		{
			icon: <PackageIcon/>,
			title: "NPM AND NODEJS",
			description: "I have core understanding of NPM. I can also develop general purpose applications with NodeJS."
		},
		{
			icon: <GlobeIcon/>,
			title: "WEB SCRAPING",
			description: "I can collect content and data from the internet then manipulate and analyze as needed."
		}
	],

	PROJECTS: [
		{
			image: '/assets/images/placeholder_projectcard.png',
			title: 'Twinder',
			description: 'A live Geolocation app for finding tweets and twitter users around you.',
			github: {
				isAvailable: true,
				link: 'https://github.com/'
			},
			view: {
				isAvailable: true,
				link: 'https://google.com'
			}
		},
		{
			image: '/assets/images/placeholder_projectcard.png',
			title: 'LIVENTS',
			description: 'A video streaming app with live Geolocation, for streaming events.',
			github: {
				isAvailable: true,
				link: 'https://github.com/'
			},
			view: {
				isAvailable: true,
				link: 'https://google.com'
			}
		},
		{
			image: '/assets/images/placeholder_projectcard.png',
			title: 'MOOVE',
			description: 'Mobile app for booking instant pickup & dropoff accross major cities.',
			github: {
				isAvailable: true,
				link: 'https://github.com/'
			},
			view: {
				isAvailable: true,
				link: 'https://google.com'
			}
		}
	],

	FOOTER_TEXTS: [
		"Fullstack Developer",
		"UI Designer",
		"Data Analyst",
		"Designed by @ernestechie on Figma",
	],

	CONTACT_EMAIL: "youremail@blablabla.bla",
	FROM: "Acme <onboarding@resend.dev>",
};
