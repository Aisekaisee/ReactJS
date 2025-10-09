import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  myObj = {
    name:'Vipul',
    age:20,
    address:{
      city:'New Delhi',
      state:'Delhi',
      country:'India'
    }
  }

  let newArr = [1,23,4,5,67,8,9]

  return (
    <>
     <h1 className='text-3xl bg-amber-300 p-3'>Vite with tailwind</h1>
     <Card userName = "vipul" myArr={newArr}/>
     <Card/>
     <Card/>
    </>
  )
}

export default App
