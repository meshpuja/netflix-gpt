import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    nowplaying: null,
    trailerVideo: null,
    popularPlaying: null,
    topRated: null,
    upcoming: null,
  },
  reducers: {
    addNowPlaying: (state, actions) => {
      state.nowplaying = actions.payload;
    },
    addTrailer: (state, actions) => {
      console.log(actions.payload);
      state.trailerVideo = actions.payload;
    },
    addPopularPlaying: (state, actions) => {
      state.popularPlaying = actions.payload;
    },
    addTopRatedPlaying: (state, actions) => {
      state.topRated = actions.payload;
    },
    addUpcoming: (state, actions) => {
      state.upcoming = actions.payload;
    },
  },
});
export const {
  addNowPlaying,
  addTrailer,
  addPopularPlaying,
  addTopRatedPlaying,
  addUpcoming,
} = movieSlice.actions;
export default movieSlice.reducer;
