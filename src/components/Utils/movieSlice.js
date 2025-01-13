import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    nowplaying: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlaying: (state, actions) => {
      state.nowplaying = actions.payload;
    },
    addTrailer: (state, actions) => {
      console.log(actions.payload);
      state.trailerVideo = actions.payload;
    },
  },
});
export const { addNowPlaying, addTrailer } = movieSlice.actions;
export default movieSlice.reducer;
