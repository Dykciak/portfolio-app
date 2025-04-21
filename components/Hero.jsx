import React from "react";
import { Vortex } from "./ui/Vortex";
import { FlipWords } from "./ui/Flip-word.jsx";
import SectionText from "./SectionText";

const StatsBlock = ({ text, value, containerClasses }) => {
	return (
		<div className="">
			<p
				className={`text-4xl md:text-5xl lg:text-6xl text-center font-bold bg-gradient-to-r from-purple-900 via-purple-700 to-purple-600 bg-clip-text text-transparent`}
			>
				{value}
			</p>
			<p className="text-xl text-orange-40 text-center truncate">{text}</p>
		</div>
	);
};

const SideLine = () => {
	return (
		<div className="w-[2px] bg-white h-20 mx-2 lg:mx-6 xl:mx-10 2xl:mx-14"></div>
	);
};
export default function Hero() {
	const words = ["Frontend Developer", "Dawid Dykto"];
	return (
		<section className="relative h-dvh w-dvw overflow-hidden  bg-cover bg-center">
			<Vortex
				backgroundColor="black"
				className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
			>
				<div className="content flex items-center justify-center flex-col size-full">
					<SectionText title="Design & Code." />
					<h1 className="text-orange-40 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center">
						<FlipWords words={words} /> <br />
					</h1>
					{/* <p className="text-xl text-orange-40 opacity-40 font-montserrat">
                    nowoczesne strony internetowe dopasowane do twoich potrzeb.
                </p> */}
				</div>
				<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
					<StatsBlock
						text="Lat doświadczenia"
						value="3+"
						containerClasses="from-green-400 via-lime-700 to-lime-400"
					/>
					<SideLine />
					<StatsBlock
						text="Projekty"
						value="4"
						containerClasses="from-indigo-700 via-blue-700 to-cyan-500"
					/>
					<SideLine />
					<StatsBlock
						text="Terminowość"
						value="100%"
						containerClasses="from-rose-700 via-red-600 to-rose-600"
					/>
				</div>
			</Vortex>
		</section>
	);
}
