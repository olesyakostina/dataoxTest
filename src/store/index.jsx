import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import topicReducer from "../store/topics/reducers";

const rootreducer = combineReducers({
    topicReducer,
});

const store = createStore(
    rootreducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;
