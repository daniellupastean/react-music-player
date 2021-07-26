// Import Icons
import {
  HiOutlineChevronRight,
  HiOutlineChevronLeft,
  HiPlay,
  HiPause,
} from "react-icons/hi";
// Import Styles
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { songsActions } from "../store";

const StyledAudioPlayer = styled.div`
  width: 50%;
  margin: 0 auto;
  .rhap_container,
  .rhap_container *:focus {
    outline: none;
  }

  .rhap_container {
    background-color: transparent;
    box-shadow: none;

    &svg {
      color: rgb(87, 87, 87);
      transition: 0.5s;
    }
  }

  .rhap_main-controls {
    padding: 2rem;
    width: 100%;
    justify-content: space-evenly;
  }

  .rhap_button-clear {
    :hover {
      color: black;
    }
  }

  .rhap_time {
    color: black;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .rhap_additional-controls,
  .rhap_volume-controls {
    display: none;
  }
`;

const CustomAudioPlayer = () => {
  const currentSong = useSelector((state) => state.currentSong);
  const dispatch = useDispatch();

  const nextSongHandler = () => {
    dispatch(songsActions.nextSong());
  };
  const previousSongHandler = () => {
    dispatch(songsActions.previousSong());
  };
  return (
    <StyledAudioPlayer>
      <AudioPlayer
        src={currentSong.audio}
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
    </StyledAudioPlayer>
  );
};

export default CustomAudioPlayer;
