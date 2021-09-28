import React, { useEffect, useRef, useState } from "react";
import "./GameBoard.css";
import TicTacToe from "./tictactoe";

function GameBoard(props) {
  const [arr, setArr] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState(true);
  const [isFull, setIsFull] = useState(false);
  let resultRef = useRef(null);
  let winRef = useRef(null);

  useEffect(() => {
    let full = arr.every((item) => item === "X" || item === "O");
    // console.log(arr,"in effect")
    let logic = TicTacToe(arr, !turn);
    // console.log(logic)
    if (logic) {
      // console.log(logic,"in logic")
      setIsFull(true);
    }
    if (!logic && full) {
      // console.log(logic,'in 2nd logic')
      winRef.current.innerText = `It was a draw`;
      setIsFull(true);
    }
  }, [turn,arr]);

  const clickHandler = (e) => {
    if (!isFull) {
      setArr((prevState) => {
        if (e.target.innerText === "") {
          let text = turn ? "X" : "O";
          resultRef.current.innerText = `Turn = ${!turn ? "X" : "O"}`;
          prevState[e.target.id] = text;
          e.target.innerText = text;
          setTurn((prevState) => !prevState);
          let logic = TicTacToe(arr, turn);
          if (logic) {
            winRef.current.innerText = `${turn ? "X" : "O"} won the match`;
            setIsFull(true);
          }
          return prevState;
        } else {
          return prevState;
        }
      });
    }
  };
  let boardItems = arr.map((item, idx) => {
    return (
      <div
        className="board-item"
        id={idx}
        key={Math.random() + idx}
        onClick={clickHandler}
      >
        {item}
      </div>
    );
  });
  return (
    <>
      <div className={"board " + props.className}>{boardItems}</div>
      <div
        className="status"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "500px",
        }}
      >
        <h1 ref={resultRef}>Turn = X</h1>
        <h1 ref={winRef}>Playing</h1>
      </div>
    </>
  );
}

export default GameBoard;
