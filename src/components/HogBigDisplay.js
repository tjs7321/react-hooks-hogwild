import React from "react";

function HogBigDisplay({bigHog}) {
    return(
        <div>
            <li className="pigTile">
                <p className="largeHeader">{bigHog.name}</p>
                <img className="maxPigTile" src={bigHog.image}/>
                <p>Specialty: {bigHog.specialty}</p>
                <p>Greased: {bigHog.greased ? "You're goddamn right" : "Unfortunately not"}</p>
                <p>Weight: {bigHog.weight}</p>
                <p className="achievementText">Highest Medal Achieved: {bigHog['highest medal achieved']}</p>
            </li>
        </div>
    )
}

export default HogBigDisplay