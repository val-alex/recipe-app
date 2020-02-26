import { combineReducers } from "redux";
import baseStoreReducer from "./baseStoreReducer";

export default combineReducers({
  baseStore: baseStoreReducer
});
