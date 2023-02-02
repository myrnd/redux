import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const Counter = ({ count, dispatch }) => {
  const [isCounterStart, setIsCounterStart] = useState(false);
  const startCtr = () => {
    setIsCounterStart(true);
  };
  useEffect(() => {
    let interval = null;
    console.log("useEffect");
    if (isCounterStart) {
      console.log("inside if");
      interval = setInterval(() => {
        dispatch({ type: "INCREMENT" });
        console.log("inside interval");
      }, 1000);
    }
    return () => {
      console.log("cleanup");
      clearInterval(interval);
    };
  }, [isCounterStart]);
  const reset = () => {
    setIsCounterStart(false);
    dispatch({ type: "RESET" });
  };
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={startCtr}>start</button>
      <button onClick={() => setIsCounterStart(false)}>stop</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Counter);
