import { useEffect, useState } from "react";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import watchFetchUsers from "./saga";
import { reducer } from "./reducer";

//creating the saga middleware
const sagaMiddleware = createSagaMiddleware();

//creating store
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchUsers);

const App = () => {
  const [data, setData] = useState([]);

  const getUsers = () => {
    store.dispatch({ type: "FETCH_REQ" });
  };
  useEffect(() => {
    setData(store.getState());
    console.log("hello");
    console.log(store.getState());
  });

  console.log("hello");
  console.log(store.getState());

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Home Page</h1>
      <button onClick={getUsers}>Get User</button>
      {data.map((user, index) => {
        return <h1 key={index}>{user.name}</h1>;
      })}
    </div>
  );
};

export default App;
