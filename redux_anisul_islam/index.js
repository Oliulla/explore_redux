// const { createStore } = require("redux");

// // // defining constants
// // const INCREMENT = "INCREMENT";
// // const DICREMENT = "DICREMENT";
// // // const ADD_USER = "ADD_USER";

// // // state
// // const initialCounterState = {
// //   count: 0,
// // };

// // // const initialUsersState = {
// // //   users: [{ name: "anisul islam" }],
// // // };

// // // action- object = type, payload
// // const incrementCounterAction = () => {
// //   return {
// //     type: INCREMENT,
// //   };
// // };

// // const dicrementCounterAction = () => {
// //   return {
// //     type: DICREMENT,
// //   };
// // };

// // // const addUser = () => {
// // //   return {
// // //     type: ADD_USER,
// // //     payload: {name: 'shakil'}
// // //   };
// // // };
// // // addUser();

// // // 1. state
// // // 2. dispatch action
// // // 3. reducer
// // // 4. store

// // create reducer for counter
// // reducer simply is a pure function that means a function takes in input and return definately a output
// // work of reducer: handle our logic and then update our state.

// const INCREMENT = "INCREMENT";
// const DECREMENT = "DICREMENT";

// const initialCounter = {
//   count: 0,
// };

// const increment = () => {
//   return {
//     type: INCREMENT,
//   };
// };

// const decrement = () => {
//   return {
//     type: DECREMENT,
//   };
// };

// // create counter reducer
// const counterReducer = (state = initialCounter, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       //INCREMENT
//       return {
//         ...state,
//         count: state.count + 1,
//       };

//     case DECREMENT:
//       // DECREMENT
//       return {
//         ...state,
//         count: state.count - 1,
//       };

//     default:
//       state;
//       break;
//   }
// };

// // store - getState(), dispatch(), subscribe()

// // create store
// const store = createStore(counterReducer);

// store.subscribe(() => {
//   console.log(store.getState());
// })

// // dispatch action
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());

const { createStore } = require("redux");
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const initCounterState = {
  count: 0,
};

const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};

const resetAction = () => {
  return {
    type: RESET,
  };
};

const createReducer = (state = initCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 2,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 2,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      state;
  }
};

const store = createStore(createReducer);

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(decrementAction());
store.dispatch(incrementAction());
store.dispatch(resetAction());