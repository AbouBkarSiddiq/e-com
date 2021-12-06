import { combineReducers } from "redux";
import adminReducer from "./admin";
import authReducer from "./auth";

const rootReducer = combineReducers({
  adminReducer,
  authReducer
});

export default rootReducer;