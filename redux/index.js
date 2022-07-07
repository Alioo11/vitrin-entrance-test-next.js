import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import postReducer from "./posts/postReducers";
import appStateReducer from "./appState/appStateReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  appState: appStateReducer,
});

const appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;
