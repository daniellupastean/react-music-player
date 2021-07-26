import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledSongsLibrary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  background: #f5f5f5;

  h3 {
    font-size: 1rem;
  }
  h4 {
    font-size: 0.8rem;
    font-weight: 400;
  }

  .song {
    display: flex;
    height: 3rem;
    padding: 0.2rem;
  }

  .song-info {
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  img {
    height: 100%;
  }
`;

const SongsLibrary = () => {
  const songs = useSelector((state) => state.songs);
  const listSongs = songs.map((s) => (
    <div className="song">
      <img src={s.cover} />
      <div className="song-info">
        <h3>{s.name}</h3>
        <h4>{s.artist}</h4>
      </div>
    </div>
  ));
  return <StyledSongsLibrary>{listSongs}</StyledSongsLibrary>;
};

export default SongsLibrary;
