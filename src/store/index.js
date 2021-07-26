import { createSlice, configureStore } from "@reduxjs/toolkit";

import data from "../other/utils";

const initialSongsState = {
  songs: data(),
  currentSong: data()[0],
  currentSongIndex: 0,
};

const songsSlice = createSlice({
  name: "songs",
  initialState: initialSongsState,
  reducers: {
    nextSong(state) {
      if (state.currentSongIndex < state.songs.length - 1) {
        state.currentSong = state.songs[state.currentSongIndex + 1];
        state.currentSongIndex++;
      }
    },
    previousSong(state) {
      if (state.currentSongIndex > 0) {
        state.currentSong = state.songs[state.currentSongIndex - 1];
        state.currentSongIndex--;
      }
    },
  },
});

const store = configureStore({
  reducer: songsSlice.reducer,
});

export const songsActions = songsSlice.actions;
export default store;
