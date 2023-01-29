import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GET_USERS from "../redux/actionTypes/actionTypes";
// import { store } from "../redux/store";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log(users)

  return (
    <div>
      <span>users</span>
      <button onClick={() => dispatch({ type: GET_USERS })}>Get users</button>
    </div>
  );
};

export default Users;
