import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count , setCount] = useState(0);
  return (
    <>
      <div>
        <CustomButton count={count} setCount={setCount} > </CustomButton>
      </div>
      
    </>
  )
}

function CustomButton(state){
  return (
    <button onClick={()=>{
      state.setCount(state.count+1);
    }}>{state.count}</button>
  )
}

export default App
