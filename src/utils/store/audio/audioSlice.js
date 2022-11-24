import { createSlice } from "@reduxjs/toolkit";

const audioSlice = createSlice({
  name: "audio",
  initialState: { audio: {} },
  reducers: {
    getAudioData: (state, action) => {
      state.audio = action.payload;
    },
  },
});

export const { getAudioData } = audioSlice.actions;
export default audioSlice.reducer;
