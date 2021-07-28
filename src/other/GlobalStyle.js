import * as styled from "styled-components";

const GlobalStyle = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: rgb(185, 185, 185) transparent;
  }

  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background: rgb(185, 185, 185);
    border-radius: 20px;
    border: transparent;
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
