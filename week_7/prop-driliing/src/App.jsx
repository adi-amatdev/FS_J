// import { createContext, useContext,  } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import { CountContext } from "./context";
import { useRecoilState, useRecoilValue, RecoilRoot } from "recoil";
import { countAtom } from "./store/atoms/atom";

//wrap component which wants to use context variables in context api
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <CountContext.Provider value={{count, setCount}}> */}
      <RecoilRoot>
        <Count />
      </RecoilRoot>
        
      {/* </CountContext.Provider> */}
      
      
    </>
  );
}

//this function displays prop drilling. Its just ugly and doesnt have anything to do with code
function Count() {
  const count = useRecoilValue(countAtom);
  // const {count, setCount} = useContext(CountContext);
  return <>
    {count} <br/>
    {count %2 == 0 ? (<div>Count is even</div>):(<></>)}
    <Buttons/>
  </>;
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  // const {count,setCount} = useContext(CountContext);
  return <>
  <button onClick={()=>{
    setCount(count + 1)
  }}> Increment</button>
   <button onClick={()=>{
    setCount(count - 1)
}}> Decrement</button>
  </>;
}

export default App;
