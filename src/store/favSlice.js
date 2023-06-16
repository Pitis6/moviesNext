import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myList: [],
};

export const favSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.myList = [...state.myList, action.payload];
      localStorage.setItem("favsMovies", JSON.stringify(state.myList));
    },
  },
});

export const { addMovie } = favSlice.actions;
export default favSlice.reducer;
