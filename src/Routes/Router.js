import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "../Components/Card";
import Home from "../Home";

export default function Router() {
  return (
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
    </Routes>
  </BrowserRouter>
  );
}
