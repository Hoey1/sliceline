import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { Menu } from "./Menu/Menu";
import { GlobalStyle } from "./Styles/GlobalStyle";

function App() {
  const [openFood, setOpenFood] = useState();

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <div>{openFood}</div>
      <Menu setOpenFood={setOpenFood} />
    </>
  );
}

export default App;
