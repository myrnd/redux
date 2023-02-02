import { connect } from "react-redux";

const Counter = ({ count, dispatch }) => {
  return (
    <>
      <h1>Counter : {count}</h1>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "DECREASE" })}
      >
        Decrease
      </button>{" "}
      <button
        className="btn btn-warning"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>{" "}
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "INCREASE" })}
      >
        Increase
      </button>
    </>
  );
};
const mapState = (state, dispatch) => {
  return { count: state.count, dispatch };
};

export default connect(mapState)(Counter); //Returns a new component which contains Counter component with some aditional features
// export default Counter;
