import React, {useEffect , useState} from 'react';
import './timer.css';

function Timer() {

const [mins,setMins] = useState("00");
let [secs,setSecs] =   useState("00");

let [start,setStart] = useState(false);
let [reset,setReset] = useState(false);

function convertTo2Dec (time:string): string{
  console.log(time)
 return (parseInt(time)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
}



useEffect(() => {


  if (reset){

    setReset(false);
    setStart(false);
    setMins("00");
    setSecs("00");
  }
  


  if (start){
  
 
  const interval = setInterval(() => {

    if (parseInt(secs) < 59){
    setSecs( convertTo2Dec((parseInt(secs) + 1).toString()));
  }
  else{
    setSecs( "00");
    setMins(convertTo2Dec((parseInt(mins) + 1).toString()))

  }


  }, 1000);


  return () => clearInterval(interval);
}

}, [secs,start,reset,mins]);



  return (
    <div id = "wrapper">
        <div id = "displayContainer" data-testid = "timerDisplay">
        {mins} : {secs}
        </div>
        <div id = "buttonsContainer" >
         <button className = "buttons"onClick = {()=>{setStart(true)}} >Start</button>
         <button className = "buttons" onClick = {()=>{setStart(false)}}>Stop</button>
         <button  className = "buttons" onClick = {()=>{setReset(true)}} >Reset</button>   
        </div>
    </div>
  );
}

export default Timer;