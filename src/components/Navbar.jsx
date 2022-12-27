import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
//Estilos
import "../estilos/navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [clickDos, setClickDos] = useState(false);
  const handleClickDos = () => setClickDos(!clickDos);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>VESH</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <p onClick={handleClickDos}>
            Productos <span className="material-icons">expand_more</span>
          </p>
          <ul className={clickDos ? "children" : "sub-menu"}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
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
          <FaTimes size={30} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={30} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
