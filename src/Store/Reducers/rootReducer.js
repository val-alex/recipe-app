import { combineReducers } from "redux";
import recipesSlice from "./recipesSlice";

export default combineReducers({
  recipes: recipesSlice,
});
