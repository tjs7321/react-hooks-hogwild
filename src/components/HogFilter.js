import React from "react";

function HogFilter({handleSortChange, setGreasy}) {

    function handleGreaseChange(event) {
        setGreasy(event.target.value)
    }


    return(
        <>
            <select onChange={handleSortChange}>
                <option>A-Z</option>
                <option>Z-A</option>
                <option>Heaviest</option>
                <option>Lightest</option>
            </select>
            <select onChange={handleGreaseChange}>
                <option>All</option>
                <option>Greased</option>
                <option>Not Greased</option>
            </select>
        </>
    )
}

export default HogFilter