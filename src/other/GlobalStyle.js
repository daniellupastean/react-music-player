import * as styled from "styled-components";

const GlobalStyle = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 150%;
  }

  h1,
  h2,
  h3 {
    color: rgb(34, 34, 34);
  }
`;

export default GlobalStyle;
