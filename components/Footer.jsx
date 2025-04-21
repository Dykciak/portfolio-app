"use client";

import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FaSignalMessenger } from "react-icons/fa6";
import { useState, useEffect } from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const [warsawTime, setWarsawTime] = useState("");

	useEffect(() => {
		const updateWarsawTime = () => {
			const options = {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				hour12: false,
			};

			const date = new Date();
			const formattedTime = new Intl.DateTimeFormat("pl-PL", {
				...options,
				timeZone: "Europe/Warsaw",
			}).format(date);

			setWarsawTime(formattedTime);
		};

		const interval = setInterval(updateWarsawTime, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<footer className="bg-black w-full">
			<div className="h-[1px] w-full bg-gradient-to-r from-black via-orange-35 to-black flex justify-center align-center"></div>
			<div className="flex justify-center align-center w-full h-full py-6 xl:text-lg">
				<div className="max-w-[1200px] flex flex-row">
					<div className="w-full pl-4 px-6 flex flex-col">
							<h3 className="text-white text-lg">{`<dawiddykto/>`}</h3>
							<p className="text-lg text-white mt-8">{warsawTime} lokalny czas</p>
							<p className="text-blue-50 text-md">Warszawa, Polska</p>
					</div>
					<div className="px-16 lg:px-32">
						<p className="text-white">Linki</p>
						<div className="flex flex-col text-blue-50 ">
							<Link href="#" className="hover:underline">
								Strona główna
							</Link>
							<Link href="#about" className="hover:underline">
								O mnie
							</Link>
							<Link href="#skills" className="hover:underline">
								Umiejętności
							</Link>
							<Link href="#projects" className="hover:underline">
								Projekty
							</Link>
							<Link href="#contact" className="hover:underline">
								Kontakt
							</Link>
						</div>
					</div>
					<div className="w-full px-6">
						<p className="text-white">Kontakt</p>
						<div className="flex flex-col">
							<p className="text-blue-50">dawid.dykto@gmail.com</p>
							<p className="text-blue-50">+48 735 039 056</p>
							<div className="text-white text-3xl flex flex-row gap-2 pt-2">
								<Link href="https://github.com/Dykciak" passHref>
									<FiGithub className="cursor-pointer hover:text-blue-50 transition-colors duration-300" />
								</Link>
								<Link
									href="https://signal.me/#eu/1_AN6FagEXFW71nQ5_Y6VEed8e7KbBPP0DI6xhqWLEZDWIdoH5tD6KUT4XOMSUwH"
									passHref
								>
									<FaSignalMessenger className="cursor-pointer hover:text-blue-50 transition-colors duration-300" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-[1px] w-full bg-gradient-to-r from-black via-orange-35 to-black"></div>
			<p className="text-blue-50 text-center py-6">
				Copyright &copy; {currentYear} Dawid Dykto. All rights reserved
			</p>
		</footer>
	);
};

export default Footer;
