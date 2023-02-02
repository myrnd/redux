const initialState = [
  {
    users: undefined,
  },
];

export const reducer = (state = initialState, action) => {
  if (action.type === "USER_FETCH_SUCCEEDED") {
    return { ...state, users: action.payload };
  }
  return state;
};
