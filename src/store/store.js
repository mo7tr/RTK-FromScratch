import { configureStore } from "@reduxjs/toolkit";
import picturesReducer from "../store/pictures/pictures.slice";

export const store = configureStore({
  reducer: {
    pictures: picturesReducer,
  },
});
