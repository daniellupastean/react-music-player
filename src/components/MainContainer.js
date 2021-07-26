import styled from "styled-components";
// Components
import Song from "./Song";
import CustomAudioPlayer from "./CustomAudioPlayer";

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 5;
  width: 100%;
`;

const MainContainer = () => {
  return (
    <StyledMainContainer>
      <Song />
      <CustomAudioPlayer />
    </StyledMainContainer>
  );
};

export default MainContainer;
