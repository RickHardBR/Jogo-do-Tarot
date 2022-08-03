import React from "react";
import Router from "./Routes/Router";
import { MainContainer } from "./style";
import { GlobalStyle } from "./Constants/GlobalStyle";

export default function App() {
  return (
<>
    <GlobalStyle/>
    <MainContainer>
      <Router />
    </MainContainer>
    </>
  );
}