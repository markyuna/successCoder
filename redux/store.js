import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reducerCourses from './reducers/reducerCourses';
import reducerCart from './reducers/reducerCart';
import reducerPayment from './reducers/reducerPayment';

const rootReducer = combineReducers({
  courses: reducerCourses,
  cart: reducerCart,
  payments: reducerPayment,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;


// import { configureStore as configureToolkitStore, combineReducers } from '@reduxjs/toolkit';
// import reducerCourses from './reducers/reducerCourses';
// import reducerCart from './reducers/reducerCart';
// import reducerPayment from './reducers/reducerPayment';

// // Define the Reducers that will always be present in the application
// const staticReducers = {
//   users: usersReducer,
//   posts: postsReducer
// };

// // Configure the store
// export default function configureAppStore(initialState) {
//   const store = configureToolkitStore({
//     reducer: createReducer(),
//     preloadedState: initialState
//   });

//   // Add a dictionary to keep track of the registered async reducers
//   store.asyncReducers = {};

//   // Create an inject reducer function
//   // This function adds the async reducer, and creates a new combined reducer
//   store.injectReducer = (key, asyncReducer) => {
//     store.asyncReducers[key] = asyncReducer;
//     store.replaceReducer(createReducer(store.asyncReducers));
//   };

//   // Return the modified store
//   return store;
// }

// function createReducer(asyncReducers) {
//   return combineReducers({
//     ...staticReducers,
//     ...asyncReducers
//   });
// }

// // Configure the toolkit store
// export const configureToolkitStore = configureToolkitStore;
