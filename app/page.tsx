import Navbar from "@/components/sections/Navbar";
import Header from "@/components/sections/Header";
import Content from "@/components/sections/Content";
import Footer from "@/components/sections/Footer";

export default function Home() {
	return (
		<div className={'bg-extraDark min-h-screen '}>
			<Navbar/>
			<Header/>
			<Content/>
			<Footer/>
		</div>
	);
}
