import { createStore } from "redux";
import { reducer } from "./reducer";
import Timer from "./Component/Timer";
import { Provider } from "react-redux";

const initialState = {
  hour: 0,
  min: 0,
  sec: 0,
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  );
}

export default App;
