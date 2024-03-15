export default function StatsCard({ img, title, text }) {
	return (
		<section className="bg-white rounded-[16px] px-[28px] py-[20px] flex justify-between items-start flex-col gap-3 relative text-center card">
			<div className="absolute top-[-24px] left-[50%] translate-x-[-50%]">
				<img
					src={img}
					alt={title}
					className="w-[90px] h-[90px] bg-DarkViolet px-3 py-3 rounded-[50%]"
				/>
			</div>
			<h1 className="text-DarkViolet text-xl font-bold mx-auto mt-[60px] text-center">
				{title}
			</h1>
			<p className="text-lg text-GrayishViolet">{text}</p>
		</section>
	);
}
