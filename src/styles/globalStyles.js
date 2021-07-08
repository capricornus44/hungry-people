import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
html,
body {
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
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

// ?? ========================== Slider start ==========================
.slide {
  display: none;
  opacity: 0;
  transition-duration: 1s ease;
}

.slide.active {
  display: flex;
  opacity: 1;
  transition-duration: 1s;
  transform: scale(1.1);
}
`
// ?? ========================== Slider end ==========================

export default GlobalStyles
