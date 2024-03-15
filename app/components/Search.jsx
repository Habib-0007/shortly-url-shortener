export default function Search({ inputVal, handleInputVal }) {
	return (
		<section className="mx-auto w-def w-full mt-16 bg-DarkViolet">
			<div className="bg-search-image px-6 py-8 flex justify-between items-center flex-col md:flex-row gap-4 w-full rounded-sm rounded-[12px]">
				<input
					className={`block outline-none w-full px-4 py-3.5 rounded-[10px] border-2 text-Red ${
						inputVal == "" ? "border-Red" : "border-white"
					}`}
					type="text"
					placeholder="Shorten a link here..."
					value={inputVal}
					onChange={event => {
						handleInputVal();
					}}
				/>
				<button className="block w-full bg-Cyan text-white px-5 py-3 rounded-[10px] text-lg md:w-[288px]">
					Shorten it
				</button>
			</div>
		</section>
	);
}
