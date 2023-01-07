// defining constants
const INCREMENT = "INCREMENT";


// state
const initialCounterState = {
  count: 0,
};

const initialUsersState = {
  users: [{ name: "anisul islam" }],
};

// action- object = type, payload
const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};

incrementCounterAction();
const dicrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};
dicrementCounterAction();