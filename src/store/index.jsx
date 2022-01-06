import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import topicReducer from "./topics/reducers";

const store = createStore(
    // topicReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;
