"use client";
import { useState } from "react";

import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Search from "./components/Search";
import Stats from "./components/Stats";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

export default function Home() {
	const [inputVal, setInputVal] = useState("");
	const [searchVal, setSearchVal] = useState("");

	function handleInputVal() {
		setInputVal(event.target.value);
	}

	return (
		<main>
			<section className="text-white">
				<Header />
				<Showcase />
				<Search
					inputVal={inputVal}
					searchVal={searchVal}
					handleInputVal={handleInputVal}
				/>
			</section>
			<section className="bg-gray-100">
				<Stats />
				<Boost />
				<Footer />
			</section>
		</main>
	);
}
