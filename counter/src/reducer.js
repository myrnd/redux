const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "RESET") {
    return { ...state, count: 0 };
  }
  return state;
};

export default reducer;
