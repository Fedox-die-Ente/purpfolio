import type {Metadata} from "next";
import "./globals.css";
import {Poppins} from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	variable: "--font-poppins",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Purpfolio - Portfolio",
	description: "Purpfolio is a modern portfolio template for developers and designers. It is made with Next.js and Tailwind CSS.",
};

export default function RootLayout({
									   children,
								   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body
			className={`${poppins.variable}`}
		>
		{children}
		</body>
		</html>
	);
}
