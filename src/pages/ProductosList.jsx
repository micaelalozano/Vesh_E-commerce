import React, { useEffect, useState } from "react";
import axios from "axios";
import NavDos from "../components/NavDos";
import HeadDos from "../components/HeadDos";
//Estilos
import "../estilos/productosList.css";

const ProductosList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get("/api/productos")
      .then((res) => res.data)
      .then((productos) => {
        setProductos(productos);
      });
  }, []);

  console.log(productos);

  return (
    <>
      <HeadDos />
      <NavDos />
      <ul>
        <div className="card-container">
          {productos.map(function (e, i) {
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
    </>
  );
};

export default ProductosList;
