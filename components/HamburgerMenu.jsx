import { useState } from "react";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";

const navItems = [
	{ href: "#about", label: "o mnie" },
	{ href: "#skills", label: "umiejętności" },
	{ href: "#projects", label: "projekty" },
	{ href: "#reviews", label: "opinie" },
	{ href: "#contact", label: "kontakt" },
];
const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isRotated, setIsRotated] = useState(false);

	const toggleMenu = () => {
		setIsOpen((prevState) => !prevState);
		setIsRotated((prevState) => !prevState);
	};

	return (
		<>
			<HiBars3
				src="menu.svg"
				alt="menu"
				className={`inline-block cursor-pointer md:hidden z-50 mr-4 transition-transform duration-300 ease-in-out text-orange-40 size-10 ${
					isRotated ? "rotate-[180deg]" : ""
				}`}
				onClick={toggleMenu}
			/>
			<div
				className={`absolute top-0 right-0 w-dvw h-dvh bg-black shadow-lg md:hidden transition-transform transform overflow-hidden ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<nav className="flex flex-col items-center justify-center p-4 w-dvw h-dvh">
					{navItems.map((link, index) => (
						<Link
							href={link.href}
							className="block text-orange-40 py-4 text-2xl"
							key={link.href}
							onClick={() => {
								setIsOpen(false);
								setIsRotated(false);
							}}
						>
							<span className="text-orange-45">{`${String(index + 1).padStart(
								2,
								"0"
							)}/`}</span>
							{`${link.label}`}
						</Link>
					))}
				</nav>
			</div>
		</>
	);
};

export default HamburgerMenu;
