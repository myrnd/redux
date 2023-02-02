import React from 'react'
import { useSelector } from 'react-redux';

const User = () => {
  const {users} = useSelector((store) => store.user);
  console.log(users);
  return (
    <div>
      {users.map((user) => {
        return <h6 key={user.id}>{user.name}</h6>
      })}
    </div>
  )
}

export default User