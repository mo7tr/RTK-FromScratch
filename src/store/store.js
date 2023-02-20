import { configureStore } from "@reduxjs/toolkit";
import pictures from "../store/pictures/pictures.slice";

export const store = configureStore({
  reducer: {
    pictures,
  },
});
