import React, { useEffect, useState } from "react";
import axios from "axios";
import NavDos from "../components/NavDos";
import HeadDos from "../components/HeadDos";
import FootDos from "../components/FootDos";
//Estilos
import "../estilos/productosList.css";

const PantalonesList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get("/api/productos")
      .then((res) => res.data)
      .then((productos) => {
        setProductos(productos);
      });
  }, []);

  //Filtrar clase de producto:
  let pantalones = [];
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].clase === "Pantalon") {
        pantalones.push(productos[i]);
    }
  }
  ///////////////////////////////////////

  return (
    <>
      <HeadDos />
      <NavDos />
      <ul>
        <div className="card-container">
          {pantalones.map(function (e, i) {
            return (
              <li key={i}>
                <div className="card">
                  <img className="img-card" src={e.imagen} alt="" />
                  <h3> {e.name} </h3>
                  <p> ${e.precio} </p>
                </div>
              </li>
            );
          })}
        </div>
      </ul>
      <FootDos />
    </>
  );
};

export default PantalonesList;
