import React from 'react'
import Button from "@/components/Button";
import {CodeIcon, EyeIcon} from "lucide-react";
import Image from "next/image";
import {MESSAGES} from "@/lib/texts";

interface Props {
	image: string;
	title: string;
	description: string;
	github: {
		isAvailable: boolean;
		link: string;
	},
	view: {
		isAvailable: boolean;
		link: string;
	}
}

export default function ProjectCard({
										image,
										title,
										description,
										github,
										view
									}: Props) {
	return (
		<div className={'w-full'}>
			<div className={'bg-[#31313F] w-full h-auto rounded-lg drop-shadow-lg'}>
				<div className={'p-4 flex flex-col gap-4'}>

					<Image
						src={image}
						alt={'project banner'} width={311} height={173}
						className={'w-full rounded-lg border-2 border-primary/50'}/>
					<div className={'flex flex-col text-left '}>


						<p className={'text-primary/50 uppercase font-semibold text-2xl'}>{title}</p>
						<p className={'font-medium text-white text-lg'}>{description}</p>

						<div className={'flex flex-row gap-2 items-center justify-center w-full mt-5'}>

							{view.isAvailable &&
                                <Button label={MESSAGES.PROJECT_CARD.VIEW_PROJECT}
                                        icon={<EyeIcon size={24} className={'text-white'}/>}
                                        variant={'primary'}
                                        onClick={() => window.open(view.link)}/>}

							{github.isAvailable &&
                                <Button label={MESSAGES.PROJECT_CARD.GITHUB_REPO}
                                        onClick={() => window.open(github.link)}
                                        variant={'secondary'}
                                        icon={<CodeIcon size={24} className={'text-white'}/>}/>}
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}
