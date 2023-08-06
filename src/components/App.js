import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogTileDisplay from "./HogTileDisplay";
import HogBigDisplay from "./HogBigDisplay";
import HogFilter from "./HogFilter";
import NewHogForm from "./NewHogForm";

function App() {

	const [bigHog, setBigHog] = useState(hogs[0])
	const [greasy, setGreasy] = useState("All")
	const [hogsToDisplay, setHogsToDisplay] = useState(hogs)
	const [sortValue, setSortValue] = useState("A-Z")

	
	function putThatHogAway(name) {
		setHogsToDisplay(hogsToDisplay.filter(hog => hog.name !== name))
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

	let greasyOrNot
		if (greasy === "All") {
			greasyOrNot = hogsToDisplay
		}
		else if (greasy === "Greased") {
			greasyOrNot = (hogsToDisplay.filter((hog) => hog.greased === true))
		}
		else if (greasy === "Not Greased") {
			greasyOrNot = (hogsToDisplay.filter((hog) => hog.greased === false))}

	console.log(greasyOrNot)
	
	return (
		<div className="App">
			<Nav />
			<HogBigDisplay bigHog={bigHog}/>
			<HogFilter
			handleSortChange={handleSortChange}
			setGreasy={setGreasy}
			/>
			<NewHogForm addNewHog={addNewHog}/>
			<HogTileDisplay
			greasyOrNot={greasyOrNot}
			showMeThatBigHog={showMeThatBigHog}
			sortValue={sortValue}
			putThatHogAway={putThatHogAway}
			/>
		</div>
	);
}

export default App;
