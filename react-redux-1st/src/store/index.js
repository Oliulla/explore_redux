import { configureStore } from "@reduxjs/toolkit";

const reduceFn = (state = { counter: 0 }, action) => {
  if (action.type === "INC") {
    return { counter: state.counter+1 };
  }

  return state;
};

const store = configureStore(reduceFn);

export default store;
