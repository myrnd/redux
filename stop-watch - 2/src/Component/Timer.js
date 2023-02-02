import { useEffect, useState } from "react";
import { connect } from "react-redux";
const Timer = (props) => {
  const [localState, setLocalState] = useState({ hour: 0, min: 0, sec: 0 });
  const [isTimerStart, setIsTimerStart] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isTimerStart) {
      interval = setInterval(() => {
        if (localState.sec < 60) {
          props.dispatch({ type: "START", payload: "sec" });
        } else if (localState.min < 60) {
          props.dispatch({ type: "START", payload: "min" });
        } else {
          props.dispatch({ type: "START", payload: "hour" });
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [props, isTimerStart, localState.sec, localState.min, localState.hour]);

  useEffect(() => {
    setLocalState(() => {
      return { hour: props.hour, min: props.min, sec: props.sec };
    });
  }, [props]);

  /***************** Start handler *****************/
  const start = () => {
    console.log("start");
    setIsTimerStart(true);
  };
  const stop = () => {
    console.log("stop");
    setIsTimerStart(false);
  };
  const reset = () => {
    console.log("reset");
    setIsTimerStart(false);
    props.dispatch({ type: "RESET" });
  };
  const { hour, min, sec } = localState;
  return (
    <div>
      <h1>Stop Watch</h1>
      <h2>
        {hour < 10 ? "0" + hour : hour}: {min < 10 ? "0" + min : min} :{" "}
        {sec < 10 ? "0" + sec : sec}
      </h2>
      <button onClick={start}>Start</button> {""}
      <button onClick={stop}>Stop</button> {""}
      <button onClick={reset}>Reset</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Timer);
