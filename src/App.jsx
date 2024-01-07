import { useState } from "react";
import { useEffect,useMemo } from "react";

function App() {
  const [counter,setCounter]=useState(0);
  const [input,setinput]=useState(1);

  let count=useMemo(()=>{
    let finalcount=0;
    for(let i=1;i<=input;i++){
      finalcount=finalcount+i;
    }
    return finalcount;
  },[input])
 
  return (
    <div>
      <input type="text"  onChange={(e)=>{
        setinput(e.target.value);
      }} placeholder="Sum from 1 to n"/>
      <br></br>
      Sum from 1 to {input} is {count}
      <br></br>
      <button onClick={()=>{setCounter(counter+1)}}>Counter {parseInt(counter)}</button>
    </div>
  );
}

export default App;