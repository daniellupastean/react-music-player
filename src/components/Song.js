import styled from "styled-components";
import { useSelector } from "react-redux";
import { device } from "../other/device";

const StyledSong = styled.div`
  flex: 1 1 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 0;
  width: 100%;

  .imagine {
    flex: 1 1 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 0;
    width: 100%;
    img {
      border-radius: 50%;
      pointer-events: none;
      height: 100%;
      width: auto;
    }
  }
  .song-details {
    text-align: center;
    margin-bottom: 1.5rem;
    min-height: 30%;
  }

  h2 {
    padding: 3rem 1rem 1rem 1rem;
    font-size: 2rem;
  }

  h3 {
    font-size: 1rem;
  }

  @media ${device.laptopL} {
    .imagine img {
      height: 80%;
    }
    h2 {
      padding: 1rem 0.8rem 0.8rem 0.8rem;
    }
  }

  @media (orientation: portrait) {
    .imagine img {
      height: 60%;
    }
  }
  @media ${device.mobileL} {
    padding-top: 1rem;
    .imagine img {
      height: 80%;
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
`;

const Song = () => {
  const currentSong = useSelector((state) => state.currentSong);
  return (
    <StyledSong>
      <div className="imagine">
        <img alt={currentSong.name} src={currentSong.cover} />
      </div>
      <div className="song-details">
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
      </div>
    </StyledSong>
  );
};

export default Song;
