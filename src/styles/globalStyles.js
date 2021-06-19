import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
html,
body {
  width: 100%;
  height: 100vh;  
  margin: 0;
  padding: 0;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  overflow: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

ol,
ul {
    list-style: none
}

img {
    display: block;
    width: 100%;
    height: auto
}

::-webkit-scrollbar {
  width: 5px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: orangered;
  border-radius: 9em;
}

`
export default GlobalStyles
