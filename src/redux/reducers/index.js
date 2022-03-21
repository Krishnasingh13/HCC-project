import { combineReducers } from "redux";
import dataReducer from "./data";
import authReducer from "./auth";
import postsReducer from "./posts";
import profileReducer from "./profile";
import searchReducer from "./search";

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  data: dataReducer,
  profile: profileReducer,
  search: searchReducer,
});

export default rootReducer;
