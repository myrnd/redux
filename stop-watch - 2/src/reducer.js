export const reducer = (state, action) => {
  if (action.type === "START") {
    console.log(action.payload);
    if (action.payload === "sec") {
      return { ...state, sec: state.sec + 1 };
    }
    if (action.payload === "min") {
      return { ...state, sec: 0, min: state.min + 1 };
    }
    if (action.payload === "hour") {
      return { ...state, sec: 0, min: 0, hour: state.hour + 1 };
    }
  }
  if (action.type === "RESET") {
    return { ...state, hour: 0, min: 0, sec: 0 };
  }
  return state;
};
