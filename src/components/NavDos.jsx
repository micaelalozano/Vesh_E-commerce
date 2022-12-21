import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
//Estilos
import "../estilos/navDos.css";

const NavDos = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="header-dos">
        <Link to="/">
          <h1>VESH</h1>
        </Link>
        <ul className={click ? "nav-menu-nav active" : "nav-menu-nav"}>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/proyectos">Productos</Link>
          </li>
          <li>
            <Link to="/acerca_de_mi">Acerca de</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
        <div className="hamburguer" onClick={handleClick}>
          {click ? (
            <FaTimes className="cruz" style={{ color: "#fff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default NavDos;
