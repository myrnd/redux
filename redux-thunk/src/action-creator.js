import { Action } from "./actions";

const URL = "https://60067de93698a80017de17db.mockapi.io/testUser";

const fetching = async () => {
  const response = await fetch(URL);
  const result = await response.json();
  console.log(result);
  return result;
};

const fetchDataSucess = (payload) => {
  return {
    type: Action.getDataSucess,
    payload,
  };
};

const fetchData = () => {
  return async (dispatch) => {
    const result = await fetching();
    dispatch(fetchDataSucess(result));
  };
};

export { fetchData };