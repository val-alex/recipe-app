import React from "react";
import { createGlobalStyle } from "styled-components";

import HomePage from "Layouts/HomePage/HomePage";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

 body {
   margin: 0;
   padding: 0;
   font-family: sans-serif;
 }

 /* Rules for sizing material-icons */
.material-icons.md-18 {
  font-size: 18px;
}
.material-icons.md-24 {
  font-size: 24px;
}
.material-icons.md-36 {
  font-size: 36px;
}
.material-icons.md-48 {
  font-size: 48px;
}
`;

export const App = () => (
  <>
    <GlobalStyle />
    <HomePage />
  </>
);

export default App;
