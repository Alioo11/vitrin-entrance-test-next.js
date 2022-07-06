import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import postReducer from "./posts/postReducers";

const rootReducer = combineReducers({
  posts: postReducer,
});

const appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;
