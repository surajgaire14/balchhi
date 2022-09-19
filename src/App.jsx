import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Menu from "./Pages/Menu";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="menu" element={<Menu />} />
      </Routes>
    </>
  );
};

export default App;
