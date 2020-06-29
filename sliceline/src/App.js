import React from "react";
import { createGlobalStyle } from "styled-components";
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <div>Hello Sliceline</div>
    </>
  );
}

export default App;
