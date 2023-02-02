import React, { useState, useEffect } from "react";

const Count = () => {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 700);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });
  // console.log("A" + timer);
  // console.log("B" + timer / 10);
  // console.log("C" + ((timer / 10) % 1000));
  return (
    <div>
      <h1>Stop Watch</h1>
      <h1>
        <span>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((timer / 10) % 1000)).slice(-2)}</span>
      </h1>
      <button className="btn btn-light" onClick={() => setStart(true)}>
        Start
      </button>{" "}
      {""}
      <button className="btn btn-light" onClick={() => setStart(false)}>
        Stop
      </button>{" "}
      {""}
      <button
        className="btn btn-light"
        onClick={() => {
          setTimer(0);
          setStart(false);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Count;
