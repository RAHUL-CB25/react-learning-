import { useState } from 'react'

import './App.css'

function App() {

  const [counter,setCounter]= useState(15)     // first value[variable,method]=useState(initialVal)

  //let counter =15
  // const addValue =()=>{
  //      counter=counter+1;
  //      console.log(counter);
  // }


  const addValue =()=>{
      // setCounter(counter+1)    // use call back for batching
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1) 

      //these will cant not do batching  :- they are dependent on the privious value
      setCounter((prevCounter)=> prevCounter+1)
      setCounter((prevCounter)=> prevCounter+1)
      setCounter((prevCounter)=> prevCounter+1)
      setCounter((prevCounter)=> prevCounter+1)

  }
  const removeValue =()=>{
    setCounter(counter-1)
  }
 

  return (
    <>
    <h1>React course with Rahul {counter}</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>
       Add value</button>{" "}
    <button onClick={removeValue} >
       remove value</button>
    <p>footer: {counter}</p>
     
    </>
  )
}

export default App
