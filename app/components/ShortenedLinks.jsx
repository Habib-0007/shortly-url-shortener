export default function ShortenedLinks({ sections }) {
	return (
		<section className="pt-[70px] flex justify-between items-center flex-col gap-[16px] text-left rounded-[12px]">
			{sections.map(section => (
				<section
					className="p-[12px] w-def mx-auto bg-white flex justify-between items-start flex-col gap-[12px] text-left rounded-[12px] md:flex-row md:items-center"
					key={section.id}
				>
					<div className="text-DarkViolet text-[20px]">{section.linkVal}</div>
					<hr className="w-[100%] h-[1px] bg-DarkViolet md:hidden" />
					<div className="text-Cyan text-[20px]">{section.content}</div>
					<button
						className={`block bg-Cyan text-white w-[100%] md:w-auto text-center py-[10px] px-[16px] text-[20px] rounded-[6px] font-bold`}
					>
						Copy
					</button>
				</section>
			))}
		</section>
	);
}
