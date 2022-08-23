import { configureStore } from "@reduxjs/toolkit";
import slice from "@store/Reducers/recipesSlice";

export default configureStore({
  reducer: { slice },
});
