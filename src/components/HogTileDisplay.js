import React from "react";
import HogTile from "./HogTile";
import { render } from "@testing-library/react";

function HogTileDisplay({hogsToDisplay, showMeThatBigHog, sortValue}) {

    let renderedHogTiles
    if (sortValue === "A-Z") {
        renderedHogTiles = hogsToDisplay.sort(function (a, b) {
            if (a.name > b.name) { return 1 }
            if (b.name > a.name) { return -1 }
            return 0
        })
    }
    else if (sortValue === "Z-A") {
        renderedHogTiles = hogsToDisplay.sort(function (a, b) {
            if (a.name > b.name) { return -1 }
            if (b.name > a.name) { return 1 }
            return 0
        })
    }
    else if (sortValue === "Heaviest") {
        renderedHogTiles = hogsToDisplay.sort(function (a, b) {
            if (a.weight > b.weight) { return -1 }
            if (b.weight > a.weight) { return 1 }
            return 0
        })
    }
    else if (sortValue === "Lightest") {
        renderedHogTiles = hogsToDisplay.sort(function (a, b) {
            if (a.weight > b.weight) { return 1 }
            if (b.weight > a.weight) { return -1 }
            return 0
        })
    }

    return(
        <div className="ui grid container">
            {renderedHogTiles.map((hog) => (
        <HogTile
        key={hog.name}
        name={hog.name}
        image={hog.image}
        showMeThatBigHog={showMeThatBigHog}
        />
    ))}
        </div>
    )
}

export default HogTileDisplay