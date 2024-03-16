import { createStore, combineReducers } from "redux";
import counterReducer from "./features/counterSlice";

// const rootReducer = combineReducers({
//   counter: counterReducer,
// });

const store = createStore(counterReducer); 

export default store;
