import { useState } from "react"

export default function UserInput() {

    const [initalValue,setInitialValue] = useState({
        initalInv : 10000,
        annualInv : 500,
        exceptedR : 5,
        duration : 20,
    });

    function handleChange(whichSelected, newValue) {
        setInitialValue((prevValues) => { 
            return {
            ...prevValues,
            [whichSelected] : newValue
        }


        }) 


    } 
    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Invesment</label>
                    <input type="number" required value={initalValue.initalInv} onChange={(event) => handleChange("initalInv", event.target.value)}></input>
                </p>
                <p>
                    <label>Annual Invesment</label>
                    <input type="number" required value={initalValue.annualInv} onChange={(event) => handleChange("annualInv", event.target.value)}></input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={initalValue.exceptedR} onChange={(event) => handleChange("exceptedR", event.target.value)}></input>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={initalValue.duration} onChange={(event) => handleChange("duration", event.target.value)}></input>
                </p>
            </div>
        </div>
    )
}