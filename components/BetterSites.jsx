"use client";
import React from "react";
import SectionText from "./SectionText";

export default function BetterSites() {
	return (
		<>
			<section className="bg-black py-12">
				<SectionText title="Różnice" />
				<p className="text-2xl text-orange-40 xl:text-3xl text-center pt-4 textShadow">
					Twoja strona - teraz bez kompromisów.
				</p>
				<div className="py-4 flex flex-row items-center flex-wrap justify-center w-full gap-4 mx-auto px-8">
					<Card
						firstIcon="🐢"
						firstTitle="Wolno działająca strona"
						firstP="Tradycyjna strona ładuje się zbyt wolno i zniechęca użytkowników jeszcze zanim zobaczą, co masz do zaoferowania?"
						secondTitle="Szybka i wydajna strona"
						secondP="Twoja strona działa błyskawicznie, dzięki czemu nie tracisz uwagi użytkownika ani sekundy."
					></Card>
					<Card
						firstTitle="Słaba widoczność w Google"
						firstP="Masz wrażenie, że Twojej strony nie widać w Google i przez to tracisz potencjalnych klientów każdego dnia?"
						secondTitle="Wysoka pozycja w Google"
						secondP="Dobrze zoptymalizowane SEO sprawia, że klienci łatwo Cię znajdują dokładnie wtedy, kiedy Cię potrzebują."
					></Card>
					<Card
						firstTitle="Nieatrakcyjny wygląd strony"
						firstP="Przestarzały wygląd strony sprawia, że nawet dobre usługi wydają się mało profesjonalne i nie wzbudzają zaufania?"
						secondTitle="Nowoczesny i estetyczny design"
						secondP="Twoja strona od razu wzbudza zaufanie i pokazuje, że jesteś profesjonalny i godny uwagi."
					></Card>
					<Card
						firstTitle="Problemy na urządzeniach mobilnych"
						firstP="Strona nie wygląda dobrze na telefonie i przez to tracisz użytkowników mobilnych, zanim jeszcze zdążą kliknąć?"
						secondTitle="Responsywny wygląd na każdym ekranie"
						secondP="Twoja strona wygląda i działa świetnie na telefonie, tablecie i komputerze – bez wyjątku."
					></Card>
				</div>
			</section>
		</>
	);
}

const Card = ({
	secondTitle,
	firstTitle,
	firstP,
	secondP,
	firstIcon,
	secondIcon,
}) => {
	const [hovered, setHovered] = React.useState(false);
	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="border border-orange-35 border-10 group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm m-4 p-4 relative h-[20rem] xl:h-[25rem] w-[15rem] xl:w-[17.5rem] hover:bg-white"
		>
			<div className="relative z-20 flex items-center justify-center w-full h-full text-left">
				{/* Pierwszy tekst */}
				<div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white group-hover/canvas-card:opacity-0 transition-all duration-300 w-[15rem] xl:w-[17.5rem] px-4">
					<h3 className="text-md mb-0 lg:text-lg">{firstTitle}</h3>
					<p className="text-sm mt-1 lg:text-md text-blue-50">{firstP}</p>
				</div>

				{/* Drugi tekst */}
				<div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/canvas-card:opacity-100 text-black transition-all duration-300 w-[15rem] xl:w-[17.5rem] px-4">
					<h3 className="text-md mb-0 lg:text-lg">{secondTitle}</h3>
					<p className="text-sm mt-1 lg:text-md text-blue-30">{secondP}</p>
				</div>
			</div>
		</div>
	);
};
