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
        state.songs[state.currentSongIndex].active = "inactive";
        state.currentSong = state.songs[state.currentSongIndex + 1];
        state.currentSongIndex++;
        state.songs[state.currentSongIndex].active = "active";
      }
    },
    previousSong(state) {
      if (state.currentSongIndex > 0) {
        state.songs[state.currentSongIndex].active = "inactive";
        state.currentSong = state.songs[state.currentSongIndex - 1];
        state.currentSongIndex--;
        state.songs[state.currentSongIndex].active = "active";
      }
    },
    changeSong(state, action) {
      state.songs[state.currentSongIndex].active = "inactive";
      state.currentSong = state.songs.find((s) => s.id === action.payload);
      state.currentSongIndex = state.songs.findIndex(
        (s) => s.id === action.payload
      );
      state.songs[state.currentSongIndex].active = "active";
    },
  },
});

const store = configureStore({
  reducer: songsSlice.reducer,
});

export const songsActions = songsSlice.actions;
export default store;
