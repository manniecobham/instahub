import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    color: ${(props) => props.theme.colors.colorPrimaryDarkBlue};
    background-color: ${(props) => props.theme.colors.colorNeutralLight};
    font-size: 1.15em;
    font-family: "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

    p {
      line-height: 1.5;
    }
    
    img {
      max-width: 100%;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
    }

    #root {
      display: flex;
      #left {
        flex-shrink: 0;
      }
      #right {
        flex-grow: 2;
      }
    }
  }

`;

export default GlobalStyles;

/* -webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale; */
