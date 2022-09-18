import NavButton from "./NavButton";

export default function Navbar() {
	return (
		<div className="bg-white shadow-md text-black h-32 px-32 gap-2 p-4 grid grid-cols-5 items-center">
			<NavButton title="OUR GOAL" />
			<NavButton title="OUR PLAN" />
			<div className="bg-blue-300 h-12"></div>
			<NavButton title="PRODUCT" />
			<NavButton title="CONTACT" />
		</div>
	);
}
