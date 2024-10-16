import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Frends'


function App() {

  function hendleClick(){
    alert('button Clicked')
  }

  const hendleClick2 = () =>{
    alert('button clicked 2')
  }
  
  const addToFive  = (num) =>{
    alert(num + 5)
  }

  return (

    <>
      
      <h3>React Core concepts-2</h3>

      <Friends></Friends>

      <Users></Users>

        <Team></Team>
      <Counter></Counter>

      <button onClick={hendleClick}>Click Me</button>
      <button onClick={hendleClick2}>Click2</button>
      <button onClick={() => {alert('Third Clicked')}}>Third</button>
      <button onClick={()=> addToFive(3)}>Forth</button>
      
    </>
  )
}

export default App
