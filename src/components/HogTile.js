import React from "react";

function HogTile({name, image, showMeThatBigHog, putThatHogAway}) {

    return(
        <ul className="ui two wide column">
            <li onClick={() => showMeThatBigHog(name)}className="pigTile">
                <p>{name}</p>
                <img className="minPigTile" src={image}/>
            </li>
            <button onClick={() => putThatHogAway(name)}>Hide</button>
        </ul>
    )
}

export default HogTile