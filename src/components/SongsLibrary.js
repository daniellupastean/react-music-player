import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { songsActions } from "../store/index";
import { device } from "../other/device";

const StyledSongsLibrary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 0 0 12rem;
  background: #f5f5f5;
  overflow-y: scroll;
  height: 100vh;

  h2 {
    padding: 1rem 0.5rem;
    font-size: 2rem;
  }

  h3 {
    font-size: 1rem;
  }
  h4 {
    font-size: 0.8rem;
    font-weight: 400;
  }

  .song {
    display: flex;
    height: 3.5rem;
    padding: 0.5rem;
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

  @media ${device.mobileL} {
    position: absolute;
    width: 100%;
    z-index: 1;

    h2 {
      padding: 0.5rem;
      font-size: 2rem;
    }
  }
`;

const SongsLibrary = () => {
  const songs = useSelector((state) => state.songs);
  const dispatch = useDispatch();
  const selectSongHandler = (e) => {
    dispatch(songsActions.changeSong(e.currentTarget.id));
    if (window.innerWidth <= 768) dispatch(songsActions.toggleLibrary());
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
  return (
    <StyledSongsLibrary>
      <h2>Library</h2>
      {listSongs}
    </StyledSongsLibrary>
  );
};

export default SongsLibrary;
