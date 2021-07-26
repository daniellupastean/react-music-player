import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledSong = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 30%;
    border-radius: 50%;
    pointer-events: none;
  }

  h2 {
    padding: 3rem 1rem 1rem 1rem;
  }

  h3 {
    font-size: 1rem;
  }
`;

const Song = () => {
  const currentSong = useSelector((state) => state.currentSong);
  return (
    <StyledSong>
      <img alt={currentSong.name} src={currentSong.cover} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </StyledSong>
  );
};

export default Song;
