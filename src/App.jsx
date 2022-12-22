import React from "react";
import { Route, Routes } from "react-router-dom";
import Carrito from "./pages/Carrito";
import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registrar" element={<Register />} />
        <Route exact path="/mis_favoritos" element={<Favoritos />} />
        <Route exact path="/mi_carrito" element={<Carrito />} />
      </Routes>
    </>
  );
};

export default App;
