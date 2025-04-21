import SectionText from "./SectionText";
import {
	IoLogoHtml5,
	IoLogoCss3,
	IoLogoJavascript,
	IoLogoSass,
	IoLogoReact,
	IoLogoVercel,
} from "react-icons/io5";
import {
	SiNextdotjs,
	SiTailwindcss,
	SiSanity,
	SiTypescript,
} from "react-icons/si";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";

const skillsData = [
	{ icon: <IoLogoHtml5 className="text-orange-500" />, title: "HTML" },
	{ icon: <IoLogoCss3 className="text-blue-500" />, title: "CSS" },
	{
		icon: <IoLogoJavascript className="text-yellow-500" />,
		title: "JavaScript",
	},
	{ icon: <SiTypescript className="text-blue-500" />, title: "TypeScript" },
	{ icon: <IoLogoSass className="text-pink-600" />, title: "Sass" },
	{ icon: <IoLogoReact className="text-blue-400" />, title: "React" },
	{ icon: <SiNextdotjs className="text-white" />, title: "NextJS" },
	{ icon: <SiTailwindcss className="text-blue-400" />, title: "TailwindCSS" },
	{ icon: <SiSanity className="text-red-400" />, title: "Sanity" },
	{ icon: <FaGitAlt className="text-red-600" />, title: "Git" },
	{ icon: <FaGithub className="text-white" />, title: "GitHub" },
	{ icon: <IoLogoVercel className="text-white" />, title: "Vercel" },
	{ icon: <FcLinux />, title: "Linux" },
];

const Block = ({ icon, title }) => {
	return (
		<div className="m-2 relative flex flex-row border-orange-35 border-[1px] px-4 py-2 rounded-lg hover:scale-110 transition-all duration-500 hover:boxShadow ">
			<div className="flex absolute left-[2/10] top-1/2 transform translate-y-[-50%] translate-x-[-20%] text-xl">
				{icon}
			</div>
			<p className="text-xl lg:text-2xl pl-5 text-orange-40">{title}</p>
		</div>
	);
};

const Skills = () => {
	return (
		<>
			<section id="skills" className="bg-orange-80 py-12 sm:pt-0">
				<SectionText title="Umiejętności" />
				<p className="text-2xl text-orange-40 xl:text-3xl text-center pt-4 textShadow">
					Technologie, z których korzystam.
				</p>
				<div className="flex justify-center">
					<div className="max-w-[650px] w-full px-10 py-5 lg:max-w-[750px]">
						<div className="flex flex-row flex-wrap items-center justify-center">
							{skillsData.map((skill, index) => (
								<Block key={index} icon={skill.icon} title={skill.title} />
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Skills;
