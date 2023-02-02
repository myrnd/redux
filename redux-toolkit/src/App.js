import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from './features/user/userSlice';
import User from './User';

const App = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(getUsers());
  },[])

  return (
      <main>
        <h1>User List</h1>
        {isLoading && <h1>Loading...</h1>}
        <User />
      </main>
  )
}

export default App