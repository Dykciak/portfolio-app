import SectionText from "./SectionText";

const Contact = () => {
	return (
		<section id="contact" className="bg-black py-12 px-4">
			<SectionText title="Kontakt" />
			<p className="text-2xl text-orange-40 xl:text-3xl text-center pt-4 pb-6 textShadow">
				Skontaktuj się ze mną.
			</p>
			<form className="max-w-lg mx-auto p-8 rounded-lg shadow-lg">
				<div className="mb-4">
					<label htmlFor="fname" className="text-orange-40">
						Imię i Nazwisko
					</label>
					<input
						type="text"
						id="fname"
						name="firstname"
						placeholder="Wpisz imię i nazwisko..."
						className="w-full mt-2 bg-black border border-orange-35 p-4 text-white"
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="topic" className="text-orange-40">
						Tytuł
					</label>
					<input
						type="text"
						id="topic"
						name="text"
						placeholder="Wpisz tytuł..."
						className="w-full mt-2 bg-black border border-orange-35 p-4 text-white"
					/>
				</div>

				<div className="mb-4">
					<label htmlFor="subject" className="text-orange-40">
						Opis
					</label>
					<textarea
						id="subject"
						name="subject"
						placeholder="Napisz opis..."
						style={{ height: "170px" }}
						className="w-full mt-2 bg-black border border-orange-35 p-4 text-white"
					/>
				</div>

				<div>
					<input
						type="submit"
						value="Submit"
						className="w-full  bg-purple-700 hover:bg-purple-800  transition-colors duration-300 text-white py-2 rounded-md cursor-pointer"
					/>
				</div>
			</form>
		</section>
	);
};

export default Contact;
