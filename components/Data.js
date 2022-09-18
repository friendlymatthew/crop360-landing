import Link from "next/link";
import NavButton from "./NavButton";

const DATA = [
	{
		name: "Moisture",
		desc: "We use moisture sensor to create optimal watering cycles",
	},
	{
		name: "Nitrogen Phosphorous Potassium",
		desc: "Nitrogen encourages leaf growth in plants. When the soil is cold, we need to compensate for the potential lack of nitrogen by adding fast-acting natural fertilizers. ",
	},
	{
		name: "pH Level",
		desc: "A pH under 6 inihibits microbial development and diminishes soil biological activity. The ideal pH for most crops is betwween 6 and 7. We aim to provide insights to perfect your soil pH to a 6.5.",
	},
	{
		name: "Temperature",
		desc: "Soil temperature",
	},
];

export default function Data() {
	return (
		<div className=" grid grid-cols-2 p-20 bg-white shadow-md">
			<div className="flex flex-col justify-center">
				<div className="text-2xl font-semibold flex items-end space-x-4">
					<img src="/iot.svg" className="h-20" />
					<div> Know exactly how your plant is feeling </div>
				</div>
				<div className="pt-8 text-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</div>
				<Link href="/sensors">
					<div className="flex pt-8 space-x-3 items-center group cursor-pointer">
						<NavButton title="OUR PLAN" />
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="currentColor"
							className="w-5 h-5 group-hover:text-purple-700 transition ease-in duration-300"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							/>
						</svg>
					</div>
				</Link>
			</div>
		</div>
	);
}
