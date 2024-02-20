export default function UserInput({defaultValue,onChangeInput}) {


    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Invesment</label>
                    <input type="number" required value={defaultValue.initalInv} onChange={(event) => onChangeInput("initalInv", event.target.value)}></input>
                </p>
                <p>
                    <label>Annual Invesment</label>
                    <input type="number" required value={defaultValue.annualInv} onChange={(event) => onChangeInput("annualInv", event.target.value)}></input>
                </p>
                
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={defaultValue.exceptedR} onChange={(event) => onChangeInput("exceptedR", event.target.value)}></input>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={defaultValue.duration} onChange={(event) => onChangeInput("duration", event.target.value)}></input>
                </p>
            </div>
        </div>
    )
}