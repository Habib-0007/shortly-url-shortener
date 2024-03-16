"use client";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Search from "./components/Search";
import ShortenedLinks from "./components/ShortenedLinks";
import Stats from "./components/Stats";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

export default function Home() {
	const [inputVal, setInputVal] = useState("");
	const [searchVal, setSearchVal] = useState("");
	const [displayType, setDisplayType] = useState("hidden");
	const [sections, setSections] = useState([]);

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

	useEffect(() => {
		const savedSections = localStorage.getItem("sections");
		if (savedSections) {
			setSections(JSON.parse(savedSections));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("sections", JSON.stringify(sections));
	}, [sections]);

	const addSection = () => {
		setSearchVal(inputVal);
		const newSection = {
			id: Date.now(),
			linkVal: inputVal,
			content: `Section ${sections.length + 1}`,
		};
		setSections([...sections, newSection]);
	};

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
					addSection={addSection}
				/>
			</section>
			<section className="bg-gray-100">
				<ShortenedLinks sections={sections} />
				<Stats />
				<Boost />
				<Footer />
			</section>
		</main>
	);
}
