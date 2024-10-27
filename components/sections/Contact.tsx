'use client';

import React, {useState} from 'react'
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import {sendEmail} from "@/lib/actions/general.action";
import {Loader} from "lucide-react";

export default function Contact() {

	const [loading, setLoading] = useState(false);

	const [contactForm, setContactForm] = useState({
		name: '',
		email: '',
		message: ''
	})
	const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

	const handleSubmission = async (e: React.FormEvent) => {
		setLoading(true);
		e.preventDefault();
		setStatus(null);

		const formData = new FormData();
		formData.append('name', contactForm.name);
		formData.append('email', contactForm.email);
		formData.append('message', contactForm.message);

		try {
			const result = await sendEmail(formData);
			if (result.success) {
				setLoading(false);
				setStatus({success: true, message: 'Message sent successfully!'});
				setContactForm({name: '', email: '', message: ''});
			} else {
				setLoading(false);
				setStatus({success: false, message: result.error || 'Failed to send message. Please try again.'});
			}
		} catch (_) {
			setLoading(false);
			setStatus({success: false, message: 'An unexpected error occurred. Please try again.'});
		}
	}

	return (
		<form onSubmit={handleSubmission} className={'max-w-2xl w-full flex flex-col gap-4 items-left'}>
			<p>Contact me, lets make magic together!</p>
			<Input
				id={'name'}
				placeholder={'Name:'}
				value={contactForm.name}
				onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
				required
			/>
			<Input
				id={'email'}
				type={'email'}
				placeholder={'Email:'}
				value={contactForm.email}
				onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
				required
			/>
			<Textarea
				id={'message'}
				placeholder={'Message:'}
				value={contactForm.message}
				onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
				required
			/>
			<button
				disabled={loading}
				type="submit"
				className={'bg-[#7562E0] p-4 rounded-lg text-white text-lg font-bold hover:bg-primary/50 transition-all flex flex-row items-center gap-2 text-center mx-auto w-full'}
			>
				{loading && <Loader size={24} className={'animate-spin'}/>}
				Submit
			</button>
			{status && (
				<p className={status.success ? 'text-green-500' : 'text-red-500'}>
					{status.message}
				</p>
			)}
		</form>
	)
}