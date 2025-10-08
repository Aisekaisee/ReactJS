import { useState } from 'react'
import './App.css'

function App() {

// let counter = 15

  const [counter,setCounter] = useState(0);
  // counter -> variable
  // setCounter -> function/method

  const addValue = () => {
  //setCounter(counter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React course with hitesh</h1>
      <h2>Counter value: {counter}</h2>
      <button 
      onClick={addValue}
      >Add value</button>
      <button
      onClick={removeValue}
      >Remove value</button>
      <p>Footer: {counter}</p>    
    </>
  )
}

export default App
