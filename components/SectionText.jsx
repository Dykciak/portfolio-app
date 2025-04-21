const SectionText = ({ title, additionalClasses }) => {
	return (
		<p
			className={`animate-text-gradient bg-gradient-to-r from-purple-500 via-red-500 to-purple-500
        bg-[200%_auto] bg-clip-text text-transparent text-xl text-center pt-4 ${additionalClasses}`}
		>
			{title}
		</p>
	);
};

export default SectionText;
