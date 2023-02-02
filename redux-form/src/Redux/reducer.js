import { createStore, combineReducers } from "redux";
import { formReducer } from "redux-form";

const initialState = {};

const rootReducer = combineReducers({
  form: formReducer,
});

export const store = createStore(rootReducer);
