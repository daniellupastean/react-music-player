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
import { useState } from "react";
import { songsActions } from "../store";
import { device } from "../other/device";

const StyledAudioPlayer = styled.div`
  width: 30%;
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

  @media ${device.laptopL} {
    width: 50%;
  }
  @media ${device.laptop} {
    width: 80%;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;

const CustomAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  const currentSong = useSelector((state) => state.currentSong);
  const dispatch = useDispatch();

  const nextSongHandler = () => {
    dispatch(songsActions.nextSong());
  };
  const endedSongHandler = () => {
    nextSongHandler();
    setAutoplay(true);
  };
  const previousSongHandler = () => {
    dispatch(songsActions.previousSong());
  };
  const playHandler = () => {
    setIsPlaying(true);
    setAutoplay(true);
  };
  const pauseHandler = () => {
    setIsPlaying(false);
    setAutoplay(false);
  };

  return (
    <StyledAudioPlayer>
      <AudioPlayer
        src={currentSong.audio}
        volume={0.3}
        showSkipControls
        autoPlay={autoplay}
        autoPlayAfterSrcChange={isPlaying}
        showJumpControls={false}
        customAdditionalControls={[]}
        customVolumeControls={[]}
        onClickPrevious={previousSongHandler}
        onClickNext={nextSongHandler}
        onEnded={endedSongHandler}
        onPlay={playHandler}
        onPause={pauseHandler}
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
