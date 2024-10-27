'use server';
import * as React from 'react';
import {MESSAGES} from "@/lib/texts";

interface EmailTemplateProps {
	name: string;
	email: string;
	message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = async ({
																				name,
																				email,
																				message
																			}) => (
	<div style={{
		fontFamily: "'Poppins', sans-serif",
		backgroundColor: "#1A1A29",
		color: "#ffffff",
		padding: "32px",
		maxWidth: "600px",
		margin: "0 auto",
	}}>
		<h1 style={{
			fontSize: "2rem",
			fontWeight: "600",
			color: "rgba(117, 98, 224, 0.5)",
			marginBottom: "16px",
		}}>
			{MESSAGES.EMAIL_TEMPLATE.NEW_CONTACT_FORM_SUBMISSION}
		</h1>
		<div style={{
			backgroundColor: "#181824",
			borderRadius: "8px",
			padding: "24px",
			marginBottom: "24px",
		}}>
			<h2 style={{
				fontSize: "1.5rem",
				fontWeight: "600",
				color: "#7562E0",
				marginBottom: "12px",
			}}>
				{MESSAGES.EMAIL_TEMPLATE.FROM}{name}
			</h2>
			<h2 style={{
				fontSize: "1.5rem",
				fontWeight: "600",
				color: "#7562E0",
				marginBottom: "12px",
			}}>
				{MESSAGES.EMAIL_TEMPLATE.EMAIL}{email}
			</h2>
			<p style={{
				fontSize: "1.125rem",
				lineHeight: "1.5",
				color: "#F5F5F5",
			}}>
				{message}
			</p>
		</div>
		<div style={{
			borderTop: "1px solid #282162",
			paddingTop: "16px",
			fontSize: "0.875rem",
			color: "#848191",
		}}>
			<p>{MESSAGES.EMAIL_TEMPLATE.THIS_MESSAGE_WAS_SENT_FROM_YOUR_PORTFOLIO_CONTACT_FORM}</p>
		</div>
	</div>
);