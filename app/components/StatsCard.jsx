export default function StatsCard({ img, title, text, id }) {
	return (
		<section
			className={`bg-white rounded-[16px] px-[28px] py-[20px] flex justify-between items-start flex-col gap-5 relative text-center md:${id} md:text-left`}
		>
			<div className="absolute top-[-36px] left-[50%] translate-x-[-50%]">
				<img
					src={img}
					alt={title}
					className="w-[90px] h-[90px] bg-DarkViolet p-6 rounded-[50%]"
				/>
			</div>
			<h1 className="text-DarkViolet text-xl font-bold mx-auto md:mx-0 mt-[60px] text-center md:text-left">
				{title}
			</h1>
			<p className="text-lg text-GrayishViolet text-md">{text}</p>
		</section>
	);
}
