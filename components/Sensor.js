const DATA = [
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
	{
		name: "pH",
		desc: "Since a pH under 6 inihibits microbial development and diminishes soil biological activity. The ideal pH for most crops is between 6 and 7. We help growers aim for a pH of 6.5",
	},
	{
		name: "Temperature",
		desc: "Soil temperature",
	},
	{
		name: "Moisture",
		desc: "We use moisture sensor to create optimal watering cycles",
	},
];

export default function Sensor() {
	return (
		<section className="text-black p-20 bg-white shadow-lg">
			<div className="">
				<h2 className="text-3xl font-bold sm:text-2xl">Our Soil Sensors</h2>

				<p className="mt-4 text-gray-900">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
					dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
					sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
				</p>

				<div className="mt-8 grid grid-cols-1 gap-8 md:gap-12 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
					{DATA.map(({ desc, name }) => {
						return (
							<div className="flex items-start group">
								<span className="flex-shrink-0 p-4 bg-white rounded-lg">
									<svg
										className="w-5 h-5 text-black"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M12 14l9-5-9-5-9 5 9 5z"></path>
										<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
										></path>
									</svg>
								</span>

								<div className="ml-4">
									<h2
										className="text-xl font-bold group-hover:text-lime-900 group-hover:underline decoration-lime-900 underline-offset-2 transition ease-in group-hover:scale-105 duration-500"
										style={{
											textDecorationThickness: "0.15rem",
										}}
									>
										{name}
									</h2>

									<p className="group-hover:scale-105 transition ease-in duration-500 mt-1 text-md text-gray-700 tracking-tighter">
										{desc}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
