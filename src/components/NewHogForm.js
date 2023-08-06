import React, {useState} from "react";

function NewHogForm({addNewHog}) {

    const [newHogName, setNewHogName] = useState("")
    const [newHogSpecialty, setNewHogSpecialty] = useState("")
    const [newHogGreased, setNewHogGreased] = useState(true)
    const [newHogWeight, setNewHogWeight] = useState(0)
    const [newHogMedal, setNewHogMedal] = useState("")
    const [newHogImage, setNewHogImage] = useState("")

    function handleNameChange(event) {
        setNewHogName(event.target.value)
    }
    function handleSpecialtyChange(event) {
        setNewHogSpecialty(event.target.value)
    }
    function handleGreasedChange(event) {
        if (event.target.value === "Greased") {
            setNewHogGreased(true)
        }
        else if (event.target.value === "Not Greased") {
            setNewHogGreased(false)
        }
    }
    function handleWeightChange(event) {
        setNewHogWeight((parseInt(event.target.value)).toFixed(1))
    }
    function handleMedalChange(event) {
        setNewHogMedal(event.target.value)
    }
    function handleImageChange(event) {
        setNewHogImage(event.target.value)
    }

    function submitNewHog(event) {
        event.preventDefault()
        let newHog = {
            name: newHogName,
            specialty: newHogSpecialty,
            greased: newHogGreased,
            weight: newHogWeight,
            "highest medal achieved": newHogMedal,
            image: newHogImage,
        }
        addNewHog(newHog)
    }
    
    return(
        <form onSubmit={submitNewHog} className="App">
            <input onChange={handleNameChange} id="name" type="text" placeholder="Name"></input>
            <input onChange={handleSpecialtyChange} id="specialty" type="text" placeholder="Specialty"></input>
            <select onChange={handleGreasedChange} id="greased" >
                <option>Greased</option>
                <option>Not Greased</option>
            </select>
            <input onChange={handleWeightChange} id="weight" type="text" placeholder="Weight"></input>
            <input onChange={handleMedalChange} id="medal" type="text" placeholder="Highest medal achieved"></input>
            <input onChange={handleImageChange} id="image" type="text" placeholder="Image URL"></input>
            <input type="submit" value="Add Piggy" />
        </form>
    )
}

export default NewHogForm
// const [newHog, setNewHog] = useState({
//     name: "",
//     specialty: "",
//     greased: "",
//     weight: "",
//     "highest medal achieved": "",
//     image: ""
// })
// function submitNewHog(event) {
//     event.preventDefault()
//     let greased
//     if (event.target.greased.value === "Not Greased") {
//         greased = false
//     }
//     else if (event.target.greased.value === "Greased") {
//         greased = true
//     }

//     setNewHog(
//         {name: event.target.name.value,
//         specialty: event.target.specialty.value,
//         greased: greased,
//         weight: (parseInt(event.target.weight.value)).toFixed(1),
//         "highest medal achieved": event.target.medal.value,
//         image: event.target.image.value}
//     )
//     // addNewHog(newHog)
// }