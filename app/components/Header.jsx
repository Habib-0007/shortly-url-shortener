import Image from "next/image";

export default function Header() {
	return (
		<header className="px-3 py-4 md:px-16 flex justify-between items-center">
			<div className="flex justify-start items-center gap-10">
				<h1>
					<Image
						src="/images/logo.svg"
						alt="logo"
						width={100}
						height={100}
					/>
				</h1>
				<div className="hidden md:flex justify-start items-center gap-4">
					<a
						className="text-DarkViolet"
						href="/"
					>
						Features
					</a>
					<a
						className="text-DarkViolet"
						href="/"
					>
						Pricing
					</a>
					<a
						className="text-DarkViolet"
						href="/"
					>
						Resources
					</a>
				</div>
			</div>
			<div className="hidden md:flex justify-center items-center gap-4">
				<button className="px-7 py-3 b-rad bg-transparent text-DarkViolet text-2xl">
					Login
				</button>
				<button className="px-7 py-3 rounded-3xl bg-Cyan text-white text-2xl">
					Signup
				</button>
			</div>
			<div className="block md:hidden text-3xl">&#9776;</div>
		</header>
	);
}
