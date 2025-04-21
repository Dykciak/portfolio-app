import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import BetterSites from "@/components/BetterSites";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<BetterSites />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}
