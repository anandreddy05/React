import React,{useState} from "react"

function App(){
  const [counter,setCounter] = useState(0)
  return (
  <div id="container">
    <h1>Counter</h1>
    <p id="displayCount">{counter}</p>
    <button onClick={()=>{
      setCounter(counter+1)
    }} id="increment">Increment</button>
    <button onClick={()=>{
      setCounter(counter-1)
    }} id="decrement">Decrement</button>
    <button onClick={()=>{
      setCounter(0)
    }} id="reset">Reset</button>
  </div>
  )
}

export default App