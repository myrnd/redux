import { applyMiddleware, combineReducers, createStore } from "redux";
import { defaultReducer, countReducer } from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  defaultReducer,
  countReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

console.log(store.getState());