import Header from "./components/Header"
import UserInput from "./components/UserInput"
import { useState } from "react"
import Result from "./components/Result"

function App() {

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
    <div>
      <Header></Header>
      <UserInput onChangeInput={handleChange} defaultValue={initalValue}></UserInput>
      <Result input={initalValue}></Result>
    </div>
  )
}

export default App
