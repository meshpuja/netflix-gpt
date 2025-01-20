import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieName: null,
    movieData: null,
  },
  reducers: {
    toggleGptShow: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addMoviesToGpt: (state, action) => {
      const { movieName, movieData } = action.payload;
      state.movieName = movieName;
      state.movieData = movieData;
    },
  },
});

export const { toggleGptShow, addMoviesToGpt } = gptSlice.actions;
export default gptSlice.reducer;
