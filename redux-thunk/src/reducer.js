import { Action } from "./actions";

export const defaultReducer = (state = {}, action) => {
  // console.log(action);
  switch (action.type) {
    case Action.getDataSucess:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const countReducer = (state = {}, action) => {
  return state;
};