export default function Banner() {
	return (
		<div className="bg-gradient-to-r to-purple-500 from-sky-600 hover:to-purple-600 hover:from-sky-500 flex items-center">
			<div
				className="text-center py-1 w-full text-md font-bold cursor-pointer hover:underline"
				style={{ textDecorationThickness: "0.15rem" }}
			>
				JOIN OUR WAITING LIST TO TEST OUR PRODUCT
			</div>
		</div>
	);
}
