'use server';

import {Resend} from "resend";
import {EmailTemplate} from "@/components/EmailTemplate";
import {config} from "@/lib/config";

export async function sendEmail(formData: FormData) {
	const name = formData.get('name') as string;
	const email = formData.get('email') as string;
	const message = formData.get('message') as string;

	console.log(name, email, message);

	const resend = new Resend(process.env.RESEND_API_KEY);

	try {
		const {data, error} = await resend.emails.send({
			from: config.FROM,
			to: config.CONTACT_EMAIL,
			subject: 'New message from your website',
			react: EmailTemplate({name, email, message}),
		});

		if (error) {
			return {success: false, error: error.message};
		}

		return {success: true, data};
	} catch (e) {
		return {success: false, error: 'An unexpected error occurred'};
	}
}