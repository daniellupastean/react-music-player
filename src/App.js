import styled from "styled-components";
// Adding Components
import GlobalStyle from "./other/GlobalStyle";
import SongsLibrary from "./components/SongsLibrary";

// Import Utils
import data from "./other/utils";
import MainContainer from "./components/MainContainer";

const StyledApp = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  font-family: "Zen Loop", sans-serif;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <SongsLibrary />
      <MainContainer />
    </StyledApp>
  );
}

export default App;
