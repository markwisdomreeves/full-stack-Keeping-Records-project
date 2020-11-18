
// THIS IS THE COMBINE REDUCERS FILE
import { combineReducers } from "redux";
import posts from "./posts";


export const reducers = combineReducers({
     posts: posts,
});
