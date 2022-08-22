import { configureStore } from "@reduxjs/toolkit";
import slice from "./Reducers/recipesSlice";

export default configureStore({
  reducer: { slice },
});
