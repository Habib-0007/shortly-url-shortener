import StatsCard from "./StatsCard";

export default function Stats() {
	return (
		<section className="px-4 md:px-16 py-16 flex justify-between items-center flex-col gap-4 mt-6">
			<div className="py-8 flex justify-between items-center flex-col gap-6 text-center">
				<h1 className="font-bold text-2xl text-DarkViolet">
					Advanced Statistics
				</h1>
				<p className="text-GrayishViolet md:px-6 w-5/6">
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</p>
			</div>
			<div className="flex justify-between items-center gap-16 md:grid md:grid-cols-3 md:gap-6 flex-col md:flex-row relative h-full">
				<div className="block md:hidden absolute left-[50%] translate-x-[-50%] bg-Cyan w-[8px] h-full mx-auto text-center"></div>
				<div className="hidden md:block absolute top-[50%] translate-y-[-50%] bg-Cyan h-[8px] w-full my-auto text-center"></div>
				<StatsCard
					img="/images/icon-brand-recognition.svg"
					title="Brand Recognition"
					text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
					id=""
				/>
				<StatsCard
					img="/images/icon-detailed-records.svg"
					title="Detailed records"
					text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
					id="mt-[80px]"
				/>
				<StatsCard
					img="/images/icon-fully-customizable.svg"
					title="Fully Customizable"
					text="Improve brand	awareness and content discoverability through customizable links, supercharging audience engagement."
					id="mt-[160px]"
				/>
			</div>
		</section>
	);
}
