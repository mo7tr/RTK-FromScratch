import { createSlice } from "@reduxjs/toolkit";

//permet de fusionner l'action et le reducer

export const picturesSlice = createSlice({
  name: "pictures",
  initialState: { value: null },
  reducers: {
    setPicturesData: (state, action) => {
      state.value = action.payload;
    },
    // setPicturesData: (state, {payload}) => {
    //     state.pictures = payload;
    //   },
    addPicture: (state, { payload }) => {
      state.value.push(payload);
    },
    editPicture: (state, { payload }) => {
      state.value = state.value.map((pic) => {
        if (pic.id === payload[1]) {
          return {
            ...pic,
            artist: payload[0],
          };
        } else {
          return pic;
        }
      });
    },
    deletePicture: (state, { payload }) => {
      state.value = state.value.filter((pic) => pic.id !== payload);
    },
  },
});

export const { setPicturesData, addPicture, editPicture, deletePicture } =
  picturesSlice.actions; // action
export default picturesSlice.reducer;
