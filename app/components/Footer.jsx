import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-VeryDarkViolet text-white py-[32px] px-[32px] md:py-[52px] flex justify-between items-center flex-col md:flex-row gap-[40px] md:items-start">
			<div>
				<Image
					src="/images/logo2.svg"
					alt="logo"
					width={100}
					height={100}
				/>
			</div>
			<div className="flex justify-between items-center flex-col gap-[12px]">
				<p className="text-xl font-bold-mb-4">Features</p>
				<a
					className="hover:text-Cyan text-Gray"
					href="/"
				>
					Link shortening
				</a>
				<a
					className="text-Gray hover:text-Cyan"
					href="/"
				>
					Branded Link
				</a>
				<a
					className="text-Gray hover:text-Cyan"
					href="/"
				>
					Analytics
				</a>
			</div>
			<div className="flex justify-between items-center flex-col gap-[12px]">
				<p className="text-xl font-bold-mb-4">Resources</p>
				<a
					className="text-Gray hover:text-Cyan"
					href="/"
				>
					Blog
				</a>
				<a
					className="text-Gray hover:text-Cyan"
					href="/"
				>
					Developers
				</a>
				<a
					className="text-Gray hover:text-Cyan"
					href="/"
				>
					Support
				</a>
			</div>
			<div className="flex justify-between items-center flex-col gap-[12px]">
				<p className="text-xl font-bold-mb-4">Company</p>
				<a
					className="text-Gray hover:text-Cyan"
					href="/"
				>
					About
				</a>
				<a
					className="text-Gray hover:text-Cyan"
					href="/"
				>
					Our Team
				</a>
				<a
					className="text-Gray hover:text-Cyan"
					href="/"
				>
					Career
				</a>
				<a
					className="text-Gray hover:text-Cyan"
					href="/"
				>
					Product
				</a>
			</div>
			<div className="flex justify-between items-center flex-row gap-[24px]">
				<a
					href="/"
					className="hover:text-Cyan"
				>
					<img
						src="/images/icon-facebook.svg"
						alt="icon-facebook"
					/>
				</a>
				<a
					href="/"
					className="hover:text-Cyan"
				>
					<img
						src="/images/icon-twitter.svg"
						alt="icon-twitter"
					/>
				</a>
				<a
					href="/"
					className="hover:text-Cyan"
				>
					<img
						src="/images/icon-pinterest.svg"
						alt="icon-pinterest"
					/>
				</a>
				<a
					href="/"
					className="hover:text-Cyan"
				>
					<img
						src="/images/icon-instagram.svg"
						alt="icon-instagram"
					/>
				</a>
			</div>
		</footer>
	);
}
