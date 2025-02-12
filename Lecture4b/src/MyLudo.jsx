import { useState } from "react";

export default function MyLudo() {
  const [Count, setCount] = useState({ blue: 0, red: 0, green: 0, yellow: 0 });
  let [arr , SetArr] = useState(["no moves"]);

  let UpdateBlue = () => {
    // setCount((perMoves) => {
    //   return { ...perMoves, blue: perMoves.blue + 1 };
    // });
    SetArr([...arr , "blue moves"]) ;
    SetArr(arr);
    console.log(arr) ; 
  };
  let UpdateRed = () => {
    setCount((perMoves) => {
      return { ...perMoves, red: perMoves.red + 1 };
    });
  };
  let UpdateYellow = () => {
    setCount((perMoves) => {
      return { ...perMoves, yellow: perMoves.yellow + 1 };
    });
  };
  let UpdateGreen = () => {
    setCount((perMoves) => {
      return { ...perMoves, green: perMoves.green + 1 };
    });
  };

  return (
    <div>
      <p>Game Begins ... </p>
      <p>Blue moves = {Count.blue}</p>
      <button style={{ backgroundColor: "blue" }} onClick={UpdateBlue}>
        +1
      </button>
      {/* blue red */}
      <p>Red moves = {Count.red}</p>
      <button style={{ backgroundColor: "red" }} onClick={UpdateRed}>
        +1
      </button>

      {/* Green area */}
      <p>Green moves = {Count.green}</p>
      <button style={{ backgroundColor: "green" }} onClick={UpdateGreen}>
        +1
      </button>

      {/* Yellow area */}
      <p>Yellow moves = {Count.yellow}</p>
      <button
        style={{ backgroundColor: "yellow", color: "black" }}
        onClick={UpdateYellow}
      >
        +1
      </button>
    </div>
  );
}