import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
/**
 * combine auth and message reducers
 * 
 */
export default combineReducers({
  auth,
  message,
});
