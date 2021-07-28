import styled from "styled-components";
// Components
import Song from "./Song";
import CustomAudioPlayer from "./CustomAudioPlayer";
import LibraryToggler from "./LibraryToggler";
import { useSelector } from "react-redux";

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: ${(props) => (props.showLibrary ? "calc(100vw - 12rem)" : "100vw")};
  padding: 1rem;
  height: 100vh;
`;

const MainContainer = () => {
  const showLibrary = useSelector((state) => state.showLibrary);
  return (
    <StyledMainContainer showLibrary={showLibrary}>
      <LibraryToggler />
      <Song />
      <CustomAudioPlayer />
    </StyledMainContainer>
  );
};

export default MainContainer;
