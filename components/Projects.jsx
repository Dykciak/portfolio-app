import SectionText from "./SectionText";
import Link from "next/link";
const Card = ({
	title,
	description,
	tech1,
	tech2,
	tech3,
	tech4,
	tech5,
	link,
	img,
}) => {
	return (
		<div className="max-w-sm bg-transparent border border-orange-35 p-4">
			<div className="relative h-[230px]">
				<img src={img} alt={title} className="w-full h-full object-cover" />
			</div>

			<div className="mt-5">
				<Link href={link} passHref>
					<h3 className="text-white font-bold text-[24px] hover:underline">
						{title}
					</h3>
				</Link>
				<p className="mt-2 text-blue-50 text-[14px]">{description}</p>
			</div>

			<div className="mt-4 flex flex-wrap gap-2 text-white">
				<p className="text-[14px]">#{tech1}</p>
				<p className="text-[14px]">#{tech2}</p>
				<p className="text-[14px]">#{tech3}</p>
				<p className="text-[14px]">#{tech4}</p>
				<p className="text-[14px]">{tech5}</p>
			</div>
		</div>
	);
};

const Projects = () => {
	return (
		<section id="projects" className="w-full h-auto bg-black py-12">
			<SectionText title="Projekty" />
			<p className="text-2xl text-orange-40 xl:text-3xl text-center pt-4 pb-6 textShadow">
				Ostatnie strony, które wykonałem.
			</p>
			<div className="flex flex-wrap justify-center align-center gap-7 p-5">
				<Card
					title="Putuk Truno Camp Area"
					description="Aplikacja dla miłośników przygód, która umożliwia odkrywanie, planowanie i śledzenie wypraw górskich z wykorzystaniem offline'owych map, nawigacji AR i wiedzy globalnej społeczności – ułatwiając i zabezpieczając podróże na łonie natury."
					tech1="nextjs"
					tech2="react"
					tech3="typescript"
					tech4="tailwindcss"
					link="https://travel-website-chi-lovat.vercel.app/"
					img={"/putuk.png"}
				/>
				<Card
					title="Redefine Gaming"
					description="Strona internetowa, która prezentuje wieloplatformową aplikację metagamingową, umożliwiając użytkownikom poznanie funkcji, obejrzenie zwiastuna, zapoznanie się z projektami powiązanymi z Web3 i dołączenie do rosnącej społeczności graczy."
					tech1="nextjs"
					tech2="react"
					tech3="javascript"
					tech4="tailwindcss"
					tech5="#gsap"
					link="https://animationswebsite.vercel.app/"
					img={"/redefine.png"}
				/>
				<Card
					title="Italy Oasis"
					description="Strona biura podróży specjalizującego się w wyjazdach do Włoch – idealna na romantyczny wypad we dwoje, rodzinne wakacje z dziećmi czy pełne wrażeń podróże ze znajomymi. Italy Oasis to szybki sposób na zaplanowanie niezapomnianej przygody w sercu Włoch."
					tech1="html"
					tech2="css"
					tech3="sass"
					tech4="javascript"
					link="https://dykciak.github.io/italyoasis/"
					img={"/italy-oasis.png"}
				/>
			</div>
		</section>
	);
};

export default Projects;
