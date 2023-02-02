import React from "react";
import { createStore } from "redux";
import Counter from "./Counter/Counter";
import { Provider } from "react-redux";

//Initial Store
const initialState = {
  count: 0,
};

//Reducer
function reducer(state, action) {
  // console.log({ state, action });
  if (action.type === "DECREASE") {
    return { count: state.count - 1 };
  }
  if (action.type === "RESET") {
    return { count: 0 };
  }
  if (action.type === "INCREASE") {
    return { count: state.count + 1 };
  }
  return state;
}

//Store :-
const store = createStore(reducer, initialState);
// console.log(store.getState());

//Action :-
// const onReset = () => {
//   store.dispatch({ type: "RESET" });
// };
export const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      {/* <button className="btn btn-primary">Decrease</button>{" "}
      <button className="btn btn-warning" onClick={onReset}>
        Reset
      </button>{" "}
      <button className="btn btn-primary">Increase</button> */}
    </Provider>
  );
};
