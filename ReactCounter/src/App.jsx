import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount((innerCount) => innerCount + 1) 
  }
  
  const decrease = () => {
    setCount((innerCount) => innerCount - 1) 
  }

  return (
    <>
      <h1>React Counter</h1>
      <h3>React Counter is a project for learning useState() hook</h3>

      <p>Count Value</p>
      <h2>{count}</h2>

      <button onClick={increase}>Increase</button> {" "}
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
