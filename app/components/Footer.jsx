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
				<p className="font-bold-mb-2">Features</p>
				<a href="/">Link shortening</a>
				<a href="/">Branded Link</a>
				<a href="/">Analytics</a>
			</div>
			<div className="flex justify-between items-center flex-col gap-[12px]">
				<p className="font-bold-mb-2">Resources</p>
				<a href="/">Blog</a>
				<a href="/">Developers</a>
				<a href="/">Support</a>
			</div>
			<div className="flex justify-between items-center flex-col gap-[12px]">
				<p className="font-bold-mb-2">Company</p>
				<a href="/">About</a>
				<a href="/">Our Team</a>
				<a href="/">Career</a>
				<a href="/">Product</a>
			</div>
			<div className="flex justify-between items-center flex-row gap-[16px]">
				<a href="/">
					<img
						src="/images/icon-facebook.svg"
						alt="icon-facebook"
					/>
				</a>
				<a href="/">
					<img
						src="/images/icon-twitter.svg"
						alt="icon-twitter"
					/>
				</a>
				<a href="/">
					<img
						src="/images/icon-pinterest.svg"
						alt="icon-pinterest"
					/>
				</a>
				<a href="/">
					<img
						src="/images/icon-instagram.svg"
						alt="icon-instagram"
					/>
				</a>
			</div>
		</footer>
	);
}
