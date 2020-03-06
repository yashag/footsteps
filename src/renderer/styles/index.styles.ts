import { createGlobalStyle } from "styled-components";

import StyleConstants from "./constants";

const GlobalStyle = createGlobalStyle`
  html, body {
    --full-size: 100%;
    width: ${StyleConstants.sizes.full};
    height: ${StyleConstants.sizes.full};
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    margin: 0;

    div#root {
      height: ${StyleConstants.sizes.full};
    }
  }
`;

export default GlobalStyle;
