import { useState } from 'react'
import axios from 'axios';
import './App.css'
import { useEffect } from 'react';

function App() {
  const [id,setId] = useState(0);

  return (
    <>
      <button onClick={()=> setId(1)}>1</button>
      <button onClick={()=> setId(2)}>2</button>
      <button onClick={()=> setId(3)}>3</button>
      <button onClick={()=> setId(4)}>4</button>

      <Todo id={id}/>
    </>
  )
}

function Todo({id}){
  const [todos,setTodos] = useState({})
  console.log(id);
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos/id="+id)
    .then(async(res)=>{
      const json = await res.data();
      setTodos(json.todos);
    })
  },[id ])

  return (
    <>
      <div>{todos.title}</div>
      <div>{todos.description}</div>
    </>
  )
}

export default App
