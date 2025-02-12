import React, { useState } from 'react';

export default function Ludo() {
  const [blueCount, setBlueCount] = useState(0);
  const [redCount, setRedCount] = useState(0);
  const [greenCount, setGreenCount] = useState(0);
  const [yellowCount, setYellowCount] = useState(0);


  return (
    <div className="App">
      <p>Game Begin ...</p>

      {/* blue area */}
      <p>Blue moves = {blueCount}</p>
      <button style={{backgroundColor:"blue"}} onClick={() => setBlueCount(blueCount + 1)}>+1</button>


       {/* blue red */}
      <p>Red moves = {redCount}</p>
      <button style={{backgroundColor:"red"}} onClick={() => setRedCount(redCount + 1)}>+1</button>


       {/* Green area */}
      <p>Green moves = {greenCount}</p>
      <button style={{backgroundColor:"green"}} onClick={() => setGreenCount(greenCount + 1)}>+1</button>


       {/* Yellow area */}
      <p>Yellow moves = {yellowCount}</p>
      <button style={{backgroundColor:"yellow", color:"black"}} onClick={() => setYellowCount(yellowCount + 1)}>+1</button>


    </div>
  )
}
