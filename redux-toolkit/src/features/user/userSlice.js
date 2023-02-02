import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://60067de93698a80017de17db.mockapi.io/user";

export const getUsers = createAsyncThunk("users/getUsers", () => {
	return fetch(url)
		.then((res) => res.json())
		.catch((err) => console.log(err));
});

const initialState = {
	users: [],
	isLoading: false,
};

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.users = payload;
    },
    [getUsers.rejected]: (state) => {
      state.isLoading = false;
    }
  }
});

export default userSlice.reducer;
