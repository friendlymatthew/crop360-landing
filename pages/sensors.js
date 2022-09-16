import Navbar from "../components/Navbar";

const DATA = [
	{
		name: "pH",
		desc: "Since a pH under 6 inihibits microbial development and diminishes soil biological activity. The ideal pH for most crops is between 6 and 7. We help growers aim for a pH of 6.5",
	},
	{
		name: "Nitrogen",
		desc: "There is a direct relationship between nitrogen supply and vegetable growth. Nitrogen also encourages leaf growth.",
	},
	{
		name: "Phosphorus",
		desc: "Phosphorous is required for root development in young vegetable plants. It also plays a key role in the formation and maturation of fruits.",
	},
	{
		name: "Potassium",
		desc: "It plays a role in allowing root vegetables to keep for long periods and has a positive effect on the size, color, and even taste of fruit vegetables. It also makes plants more vigorous and resisitant to diseases, parasites, and adverse weather.",
	},
];

export default function Sensors() {
	return (
		<div className="min-h-screen bg-white text-black px-96">
			<div className="text-4xl text-center py-32">Managing Soil Fertility</div>
			<div className="grid grid-cols-1 divide-y-2 divide-gray-100 gap-y-12">
				{DATA.map((data) => {
					return (
						<div className="text-xl font-semibold">
							{data.name}
							<div className="text-lg font-normal">{data.desc}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
