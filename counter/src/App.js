import { createStore } from "redux";
import { Provider } from "react-redux";
import Counter from "./Counter";
import reducer from "./reducer";

function App() {
  const initialState = {
    count: 0,
  };
  const store = createStore(reducer, initialState);
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
}

export default App;
