import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogTileDisplay from "./HogTileDisplay";
import HogBigDisplay from "./HogBigDisplay";
import HogFilter from "./HogFilter";
import NewHogForm from "./NewHogForm";

function App() {

	const [bigHog, setBigHog] = useState(hogs[0])
	const [greasy, setGreasy] = useState(true)
	const [hogsToDisplay, setHogsToDisplay] = useState(hogs)
	const [sortValue, setSortValue] = useState("A-Z")

	function handleGreaseChange(event) {
		if (event.target.value === "All") {setHogsToDisplay(hogs)}
		else if (event.target.value === "Greased") {
			setGreasy(false)
			setHogsToDisplay(hogs.filter((hog) => hog.greased === greasy))
		}
		else if (event.target.value === "Not Greased") {
			setGreasy(true)
			setHogsToDisplay(hogs.filter((hog) => hog.greased === greasy))}
	}

	function handleSortChange(event) {
		setSortValue(event.target.value)
	}

	function showMeThatBigHog(name) {
		setBigHog(hogsToDisplay.find(hog => hog.name === name))
	}

	function addNewHog(newHog) {
		setHogsToDisplay([...hogsToDisplay, newHog])
	}

	console.log(hogsToDisplay)
	
	return (
		<div className="App">
			<Nav />
			<HogBigDisplay bigHog={bigHog}/>
			<HogFilter
			handleGreaseChange={handleGreaseChange}
			handleSortChange={handleSortChange}
			/>
			<NewHogForm addNewHog={addNewHog}/>
			<HogTileDisplay
			hogsToDisplay={hogsToDisplay}
			showMeThatBigHog={showMeThatBigHog}
			sortValue={sortValue}
			/>
		</div>
	);
}

export default App;
