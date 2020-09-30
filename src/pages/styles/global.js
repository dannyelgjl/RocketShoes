import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }

  body {
    background: #191919;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px sans-serif;
  }

  button: {
    cursor: pointer
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px
  }



`;
