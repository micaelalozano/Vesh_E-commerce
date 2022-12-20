import React from "react";
import { Route, Routes } from "react-router-dom";
import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/mis_favoritos" element={<Favoritos />} />
      </Routes>
    </>
  );
};

export default App;
