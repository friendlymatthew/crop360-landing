export default function Navbar() {
	return (
		<div className="h-20 px-32 text-4xl flex justify-between text-black bg-white shadow-md items-center">
			<div className="font-semibold tracking-wide">Crop360</div>

			<div className="flex space-x-20 text-xl tracking-tighter">
				<div>Data</div>
				<div>Sign Up</div>
			</div>
		</div>
	);
}
