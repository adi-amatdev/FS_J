import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  {RevenueCard}  from './components/RevenueCard'

function App() {

  return (
    <>

      <RevenueCard revamt={100}  ordernum={12} timings={"today , 4:00pm"} />
    </>
  )
}

export default App
