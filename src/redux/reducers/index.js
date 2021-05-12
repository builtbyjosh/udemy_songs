import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "no scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "Beautiful People", duration: "5:12" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case "SONG_SELECTED":
      return action.payload;
    default:
      return selectedSong;
  }
};

const rootReducer = combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

export default rootReducer;
