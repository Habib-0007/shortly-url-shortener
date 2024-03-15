import Image from "next/image";

export default function Showcase() {
	return (
		<section className="flex justify-between items-center flex-col gap-6 mt-4 md:flex-row md:mt-10 md:pl-16">
			<div className="illus w-full self-end md:order-2">
				<Image
					src="/images/illustration-working.svg"
					alt="illustration-working"
					width={100}
					height={100}
				/>
			</div>
			<div className="w-full flex justify-between items-center flex-col gap-4 text-center px-4 md:order-1 md:text-left md:items-start md:px-0">
				<h1 className="font-bold text-DarkViolet text-5xl">
					More than just shorter links{" "}
				</h1>
				<p className="text-GrayishViolet text-lg">
					Build your brand’s recognition and get detailed insights on how your
					links are performing.
				</p>
				<button className="px-8 py-3 bg-Cyan text-white text-xl b-rad">
					Get Started
				</button>
			</div>
		</section>
	);
}
