import { createStore, combineReducers } from "redux";
import counterReducer from "./features/counterSlice";
import authReducer from "./features/authSlice";
import { composeWithDevTools } from '@redux-devtools/extension'

const rootReducer = combineReducers({
    counter: counterReducer,
    isLoggedIn: authReducer,
});


// const store = createStore(counterReducer); 
const store = createStore(rootReducer, composeWithDevTools());

export default store;
