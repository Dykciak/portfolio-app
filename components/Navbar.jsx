"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
const navItems = [
	{ href: "#about", label: "o mnie" },
	{ href: "#skills", label: "umiejętności" },
	{ href: "#projects", label: "projekty" },
	{ href: "#reviews", label: "opinie" },
	{ href: "#contact", label: "kontakt" },
];

const Navbar = () => {
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isNavVisible, setIsNavVisible] = useState(true);
	const navContainerRef = useRef(null);

	const { y: currentScrollY } = useWindowScroll();

	useEffect(() => {
		if (currentScrollY < 60) {
			setIsNavVisible(true);
			navContainerRef.current.classList.remove("floating-nav");
		} else if (currentScrollY > lastScrollY) {
			setIsNavVisible(false);
			navContainerRef.current.classList.add("floating-nav");
		} else if (currentScrollY < lastScrollY) {
			setIsNavVisible(true);
			navContainerRef.current.classList.add("floating-nav");
		}

		setLastScrollY(currentScrollY);
	}, [currentScrollY, lastScrollY]);

	useEffect(() => {
		gsap.to(navContainerRef.current, {
			y: isNavVisible ? 0 : -100,
			opacity: isNavVisible ? 1 : 0,
			duration: 0.15,
		});
	}, [isNavVisible]);

	const navStyles =
		"lg:text-lg xl:text-xl text-orange-40 transition duration-300 hover:animate-pulseColor cursor-pointer";

	return (
		<div
			className="fixed inset-x-0 md:top-4 top-0 right-0 z-50 h-16 border-none transition-all duration-700 md:inset-x-6"
			ref={navContainerRef}
		>
			<header className="absolute top-1/2 w-full -translate-y-1/2">
				<nav className="flex size-full items-center justify-between p-4">
					<div className="flex items-center gap-7">
						<Link
							href="#"
							className={`${navStyles} md:text-sm text-lg`}
						>{`<dawiddykto/> `}</Link>
					</div>
					<div className="flex h-full items-center">
						<div className="hidden md:block">
							{navItems.map((link, index) => (
								<Link
									href={link.href}
									className={`${navStyles} relative ms-10`}
									key={link.href}
								>
									<span className="text-orange-45">{`${String(
										index + 1
									).padStart(2, "0")}/`}</span>
									{`${link.label}`}
								</Link>
							))}
						</div>
					</div>
					<HamburgerMenu />
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
