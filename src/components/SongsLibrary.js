import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { songsActions } from "../store/index";

const StyledSongsLibrary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0 12rem;
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
    transition: background 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background: lightblue;
    }
  }
  .active {
    background: lightblue;
  }

  .song-info {
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  img {
    height: 100%;
    pointer-events: none;
  }
`;

const SongsLibrary = () => {
  const songs = useSelector((state) => state.songs);
  const dispatch = useDispatch();
  const selectSongHandler = (e) => {
    dispatch(songsActions.changeSong(e.currentTarget.id));
  };

  const listSongs = songs.map((s) => (
    <div
      key={s.id}
      id={s.id}
      onClick={selectSongHandler}
      className={"song " + s.active}
    >
      <img alt={s.name} src={s.cover} />
      <div className="song-info">
        <h3>{s.name}</h3>
        <h4>{s.artist}</h4>
      </div>
    </div>
  ));
  return <StyledSongsLibrary>{listSongs}</StyledSongsLibrary>;
};

export default SongsLibrary;
