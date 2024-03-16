"use client";
import { useState } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Search from "./components/Search";
import Stats from "./components/Stats";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

export default function Home() {
	const [inputVal, setInputVal] = useState("");
	const [searchVal, setSearchVal] = useState("");
	const [displayType, setDisplayType] = useState("hidden");

	function handleDisplayType() {
		if (displayType == "hidden") {
			setDisplayType("flex");
		} else {
			setDisplayType("hidden");
		}
	}

	function handleInputVal() {
		setInputVal(event.target.value);
	}

	return (
		<main>
			<section className="text-white">
				<Header handleDisplayType={handleDisplayType} />
				<Navbar displayType={displayType} />
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
