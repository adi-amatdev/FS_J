import  React,{useState} from 'react' ;

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import './App.css'

function App() {
  return <CardWrapper prop={<TextComponent/>}/>
  
}

function CardWrapper({prop}){

  return <div style={{border:"2px solid black"}}>
    {prop}
  </div>
}

function TextComponent(){
  return <div>
    Hello there
  </div>
}

export default App
