import SectionText from "./SectionText";
import Image from "next/image";
const About = () => {
	return (
		<section id="about" className="w-full h-40dvh bg-orange-80 py-12">
			<div>
				<SectionText title="O Mnie" />
			</div>
			<div className="flex justify-center align-center pt-4">
				<p className="text-blue-50 px-4 text-center md:w-3/4 max-w-[600px] 2xl:text-lg">
					<span className="text-2xl text-orange-40 xl:text-3xl">
						Cześć! Jestem Dawid.
					</span>
					<br /> Zajmuję się tworzeniem nowoczesnych stron internetowych, które
					łączą estetykę z funkcjonalnością. Ciągle rozwijam swoje umiejętności,
					a moją motywacją jest tworzenie czegoś wyjątkowego. W wolnym czasie
					czytam książki i trenuję na siłowni.
				</p>
			</div>
		</section>
	);
};

export default About;
