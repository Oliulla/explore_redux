// // const { createStore } = require("redux");
// // // // defining constants
// // // const INCREMENT = "INCREMENT";
// // // const DICREMENT = "DICREMENT";
// // // // const ADD_USER = "ADD_USER";

// // // // state
// // // const initialCounterState = {
// // //   count: 0,
// // // };

// // // // const initialUsersState = {
// // // //   users: [{ name: "anisul islam" }],
// // // // };

// // // // action- object = type, payload
// // // const incrementCounterAction = () => {
// // //   return {
// // //     type: INCREMENT,
// // //   };
// // // };

// // // const dicrementCounterAction = () => {
// // //   return {
// // //     type: DICREMENT,
// // //   };
// // // };

// // // // const addUser = () => {
// // // //   return {
// // // //     type: ADD_USER,
// // // //     payload: {name: 'shakil'}
// // // //   };
// // // // };
// // // // addUser();

// // // // 1. state
// // // // 2. dispatch action
// // // // 3. reducer
// // // // 4. store

// // // create reducer for counter
// // // reducer simply is a pure function that means a function takes in input and return definately a output
// // // work of reducer: handle our logic and then update our state.

// // const INCREMENT = "INCREMENT";
// // const DECREMENT = "DICREMENT";

// // const initialCounter = {
// //   count: 0,
// // };

// // const increment = () => {
// //   return {
// //     type: INCREMENT,
// //   };
// // };

// // const decrement = () => {
// //   return {
// //     type: DECREMENT,
// //   };
// // };

// // // create counter reducer
// // const counterReducer = (state = initialCounter, action) => {
// //   switch (action.type) {
// //     case INCREMENT:
// //       //INCREMENT
// //       return {
// //         ...state,
// //         count: state.count + 1,
// //       };

// //     case DECREMENT:
// //       // DECREMENT
// //       return {
// //         ...state,
// //         count: state.count - 1,
// //       };

// //     default:
// //       state;
// //       break;
// //   }
// // };

// // // store - getState(), dispatch(), subscribe()

// // // create store
// // const store = createStore(counterReducer);

// // store.subscribe(() => {
// //   console.log(store.getState());
// // })

// // // dispatch action
// // store.dispatch(increment());
// // store.dispatch(increment());
// // store.dispatch(increment());
// // store.dispatch(decrement());

// // const { createStore } = require("redux");
// // const INCREMENT = "INCREMENT";
// // const DECREMENT = "DECREMENT";
// // const RESET = "RESET";
// // const initCounterState = {
// //   count: 0,
// // };

// // const incrementAction = () => {
// //   return {
// //     type: INCREMENT,
// //   };
// // };

// // const decrementAction = () => {
// //   return {
// //     type: DECREMENT,
// //   };
// // };

// // const resetAction = () => {
// //   return {
// //     type: RESET,
// //   };
// // };

// // const createReducer = (state = initCounterState, action) => {
// //   switch (action.type) {
// //     case INCREMENT:
// //       return {
// //         ...state,
// //         count: state.count + 2,
// //       };
// //     case DECREMENT:
// //       return {
// //         ...state,
// //         count: state.count - 2,
// //       };

// //     case RESET:
// //       return {
// //         ...state,
// //         count: 0,
// //       };

// //     default:
// //       state;
// //   }
// // };

// // const store = createStore(createReducer);

// // store.subscribe(() => {
// //   console.log(store.getState());
// // })

// // store.dispatch(incrementAction());
// // store.dispatch(incrementAction());
// // store.dispatch(decrementAction());
// // store.dispatch(decrementAction());
// // store.dispatch(incrementAction());
// // store.dispatch(resetAction());

// const {createStore} = require("redux");

// const ADD_USER = "INCREMENT";
// // const DECREMENT = "DECREMENT";
// // const RESET = "RESET";
// // const INCREMENT_COUNTER_BY_VALUE = "INCREMENT_COUNTER_BY_VALUE";

// const initCounter = {
//   users: ["anisul"],
//   count: 0,
// };

// const addUsers = (value) => {
//   return {
//     type: ADD_USER,
//     payload: value

//   };
// };
// // const decrementAction = () => {
// //   return {
// //     type: DECREMENT,
// //   };
// // };
// // const resetAction = () => {
// //   return {
// //     type: RESET,
// //   };
// // };

// // const incrementCounterByPayload = (value) => {
// //   return {
// //     type: INCREMENT_COUNTER_BY_VALUE,
// //     payload: value
// //   }
// // }

// const createReducer = (state = initCounter, action) => {
//   switch (action.type) {
//     case ADD_USER:
//       return {
//         users: [...state.users, action.payload],
//         count: state.users.length + 1,
//       };
//     // case DECREMENT:
//     //   return {
//     //     ...state,
//     //     count: state.count - 1,
//     //   };

//     // case RESET:
//     //   return {
//     //     ...state,
//     //     count: 0,
//     //   };
//     // case INCREMENT_COUNTER_BY_VALUE:
//     //   return {
//     //     ...state,
//     //     count: state.count + action.payload,
//     //   };

//     default:
//       state;
//   }
// };

// const store = createStore(createReducer);

// store.subscribe(() => {
//   console.log(store.getState());
// })

// // store.dispatch(incrementAction())
// // store.dispatch(incrementAction())
// // store.dispatch(incrementAction())
// // store.dispatch(incrementAction())
// // store.dispatch(incrementAction())
// // store.dispatch(decrementAction())
// // store.dispatch(resetAction())

// // store.dispatch(incrementCounterByPayload(10));
// store.dispatch(addUsers("rana"))
// store.dispatch(addUsers("nana"))
// store.dispatch(addUsers("mana"))

const { createStore, combineReducers } = require("redux");

// products constant
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";
//
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";

// redux state
const initProductCounter = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};
const initCartStates = {
  cart: ["sugar"],
  numberOfProducts: 1,
};

// redux action
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProduct = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};
const getCart = () => {
  return {
    type: GET_CART,
  };
};
const addCart = (product) => {
  return {
    type: ADD_CART,
    payload: product,
  };
};

const productReducer = (state = initProductCounter, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};
const productCartReducer = (state = initCartStates, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
      };
    case ADD_CART:
      return {
        cart: [...state.cart, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productReducer,
  productCartReducer
});

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("komola"));
store.dispatch(getCart());
store.dispatch(addCart("apple"));
