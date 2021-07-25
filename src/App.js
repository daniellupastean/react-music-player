import { useState } from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import { HiPlay, HiPause } from "react-icons/hi";
// Import Styles
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./styles/App.scss";
// Adding Components
import Song from "./components/Song";
// Import Utils
import data from "./utils";

function App() {
  // Variables
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState({
    songIndex: 0,
    song: songs[0],
  });
  //Event Handlers
  const nextSongHandler = () => {
    if (currentSong.songIndex < songs.length - 1) {
      setCurrentSong({
        songIndex: currentSong.songIndex + 1,
        song: songs[currentSong.songIndex + 1],
      });
    }
  };

  const previousSongHandler = () => {
    if (currentSong.songIndex > 0) {
      setCurrentSong({
        songIndex: currentSong.songIndex - 1,
        song: songs[currentSong.songIndex - 1],
      });
    }
  };

  return (
    <div className="App">
      <Song currentSong={currentSong.song} />
      <div className="audio-player">
        <AudioPlayer
          src={currentSong.song.audio}
          volume={0.3}
          showSkipControls
          showJumpControls={false}
          customAdditionalControls={[]}
          customVolumeControls={[]}
          onClickPrevious={previousSongHandler}
          onClickNext={nextSongHandler}
          onEnded={nextSongHandler}
          customIcons={{
            previous: <HiOutlineChevronLeft />,
            next: <HiOutlineChevronRight />,
            play: <HiPlay />,
            pause: <HiPause />,
          }}
        />
      </div>
    </div>
  );
}

export default App;
