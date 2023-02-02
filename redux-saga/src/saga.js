import { put, call, takeLatest } from "redux-saga/effects";

function* watchFetchUsers() {
  yield takeLatest("FETCH_REQ", fetchUsers);
}

const fetchUser = async () => {
  const url = "https://60067de93698a80017de17db.mockapi.io/user";
  const res = await fetch(url);
  const users = await res.json();
  return users;
};

function* fetchUsers() {
  try {
    // const users = yield fetchUser();
    const users = yield call(fetchUser);
    console.log(users);
    yield put({ type: "USER_FETCH_SUCCEEDED", payload: users });
  } catch (error) {
    console.log(error);
  }
}

export default watchFetchUsers;
