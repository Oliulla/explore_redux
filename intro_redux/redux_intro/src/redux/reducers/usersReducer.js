import GET_USERS from "../actionTypes/actionTypes";

const initState = {
  users: [],
};

const userReducer = (state = initState, action) => {
  // console.log(action);
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: fetch("https://jsonplaceholder.typicode.com/users")
          // .then((res) => res.json)
          // .then((data) => data),
      };

    default:
      return state;
  }
};

// console.log(initState.users);
export default userReducer;
