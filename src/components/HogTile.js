import React from "react";

function HogTile({name, image, showMeThatBigHog}) {

    

    return(
        <ul className="ui two wide column">
            <li onClick={() => showMeThatBigHog(name)}className="pigTile">
                <p>{name}</p>
                <img className="minPigTile" src={image}/>
            </li>
        </ul>
    )
}

export default HogTile