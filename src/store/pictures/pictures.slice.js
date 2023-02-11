import { createSlice } from "@reduxjs/toolkit";

//permet de fusionner l'action et le reducer

export const picturesSlice = createSlice({
  name: "pictures",
  initialState: { pictures: null },
  reducers: {
    setPicturesData: (state, action) => {
      state.pictures = action.payload;
    },
  },
});

export const { setPicturesData } = picturesSlice.actions; // action
export default picturesSlice.reducer;
