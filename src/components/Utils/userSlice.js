import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    adduser: (state, action) => {
      return action.payload;
    },
    removeuser: (state, action) => {
      return null;
    },
  },
});
export default userSlice.reducer;
export const { adduser, removeuser } = userSlice.actions;
