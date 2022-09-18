export default function NavButton({ title }) {
	return (
		<a className="tracking-tighter cursor-pointer flex justify-center text-lg text-center font-bold">
			<div className="bg-clip-text bg-gradient-to-r from-lime-800 to-lime-900 hover:from-lime-900 hover:to-slate-900 text-transparent transition ease-in duration-100">
				{title}
			</div>
		</a>
	);
}
