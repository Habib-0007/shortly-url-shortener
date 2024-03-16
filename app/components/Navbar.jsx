export default function Navbar({ displayType }) {
	return (
		<nav
			className={`absolute left-[50%] translate-x-[-50%] bg-DarkViolet py-9 px-2 md:hidden w-def rounded-xl flex justify-between items-center gap-6 flex-col ${displayType}`}
		>
			<div className="flex justify-between items-center flex-col gap-6">
				<a
					className="text-white text-xl"
					href="/"
				>
					Features
				</a>
				<a
					className="text-white text-xl"
					href="/"
				>
					Pricing
				</a>
				<a
					className="text-white text-xl"
					href="/"
				>
					Resources
				</a>
			</div>
			<hr className="text-white w-full h-[0.3px] bg-white" />
			<div className="flex justify-between items-center gap-6 flex-col">
				<button className="px-7 py-2 b-rad bg-transparent text-white text-xl">
					Login
				</button>
				<button className="px-7 py-2 b-rad bg-Cyan text-white text-xl">
					Signup
				</button>
			</div>
		</nav>
	);
}
