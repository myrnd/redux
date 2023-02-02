import { connect } from "react-redux";
const Counter = ({ min, sec, milSec, dispatch }) => {
  return (
    <div>
      <h1>Stop Watch</h1>
      <h2>
        {min} : {sec}: {milSec}
      </h2>
      <button onClick={() => dispatch({ type: "START" })}>Start</button> {""}
      <button onClick={() => dispatch({ type: "STOP" })}>Stop</button> {""}
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

const mapStateToProps = (store) => {
  return store;
};

export default connect(mapStateToProps)(Counter);
