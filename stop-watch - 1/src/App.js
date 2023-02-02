import { createStore } from "redux";
// import Counter from "./counter/Counter";
import Count from "./counter/Count";
import { Provider } from "react-redux";
//Reducer
const reducer = (state, action) => {
  if (action.type === "START") {
    console.log("start");
    // let temp = 0;
    setInterval(() => {
      return { ...state, milSec: 10 };
    }, 1000);
  }
  if (action.type === "STOP") {
    console.log("stop");
  }
  if (action.type === "RESET") {
    console.log("reset");
  }
  return state;
};
//Intial State
const initailState = {
  min: 0,
  sec: 0,
  milSec: 0,
};

const store = createStore(reducer, initailState);
console.log(store.getState());

function App() {
  return (
    <Provider store={store}>
      {/* <Counter /> */}
      <Count />
    </Provider>
  );
}

export default App;
