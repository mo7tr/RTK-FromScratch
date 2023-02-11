import { configureStore } from "@reduxjs/toolkit";
import picturesReducer from "../store/pictures/pictures.slice";

export default configureStore({
  reducer: {
    pictures: picturesReducer,
  },
});
