import React, { useRef, useState } from "react";
import "./homes.css";
var data = ["", "", "", "", "", "", "", "", ""];
function Homes() {
    const curRef=useRef(null)
  let [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const toggle = (e, idx) => {
    if (lock) {
      return;
    }
    if (count % 2 === 0&& data[idx]=='') {
      e.target.innerHTML = `<h1>X</h1>`;
      data[idx] = "x";
      setCount(++count);
    } else if(data[idx]=='') {
      e.target.innerHTML = `<h1>O</h1>`;
      data[idx] = "o";
      setCount(++count);
    }
    checkWin();
  };
  const checkWin=()=>{
    if(data[0]===data[1]&&data[1]===data[2]&&data[2]!==""){
    won(data[0])
    }else if(data[3]===data[4]&&data[4]===data[5]&&data[5]!==""){
        won(data[3]) 
    }else if(data[6]===data[7]&&data[7]===data[8]&&data[8]!==""){
        won(data[6]) 
    }else if(data[0]===data[3]&&data[3]===data[6]&&data[6]!==""){
        won(data[0]) 
    }else if(data[1]===data[4]&&data[4]===data[7]&&data[7]!==""){
        won(data[1]) 
    }
     else if(data[2]===data[5]&&data[5]===data[8]&&data[8]!==""){
        won(data[2]) 
    }
     else if(data[0]===data[4]&&data[4]===data[8]&&data[8]!==""){
        won(data[0]) 
    }
     else if(data[6]===data[4]&&data[4]===data[2]&&data[2]!==""){
        won(data[6]) 
    }
  }
  const won=(winner)=>{
    setLock(true);
    curRef.current.innerHTML=`congratulation <span>${winner}</span> in Tic Tac Tie`

  }
  const resetData=()=>{
   setLock(false)
  data = ["", "", "", "", "", "", "", "", ""];
  curRef.current.innerHTML=`Tic Tac Toe Game`;
  const boxes = document.querySelectorAll(".boxes");
  boxes.forEach(box => {
    box.innerHTML = ""; 
  });

  }
  console.log(data)
  return (
    <div className="container">
      <h1 className="title" ref={curRef}>
        Tic Tac Toe Game 
      </h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e)=>toggle(e,0)}></div>
          <div className="boxes" onClick={(e)=>toggle(e,1)}></div>
          <div className="boxes" onClick={(e)=>toggle(e,2)}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e)=>toggle(e,3)}></div>
          <div className="boxes" onClick={(e)=>toggle(e,4)}></div>
          <div className="boxes" onClick={(e)=>toggle(e,5)}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e)=>toggle(e,6)}></div>
          <div className="boxes" onClick={(e)=>toggle(e,7)}></div>
          <div className="boxes" onClick={(e)=>toggle(e,8)}></div>
        </div>
      </div>
      <div className="reset_div">
        <button className="reset" onClick={resetData}>Reset</button>
      </div>
    </div>
  );
}

export default Homes;
