import styled from "styled-components";
// Adding Components
import GlobalStyle from "./other/GlobalStyle";
import SongsLibrary from "./components/SongsLibrary";
import MainContainer from "./components/MainContainer";

import { useSelector } from "react-redux";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  font-family: "Zen Loop", sans-serif;
`;

function App() {
  const showLibrary = useSelector((state) => state.showLibrary);
  return (
    <StyledApp>
      <GlobalStyle />
      {showLibrary && <SongsLibrary />}
      <MainContainer />
    </StyledApp>
  );
}

export default App;
