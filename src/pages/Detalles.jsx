import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import NavDos from "../components/NavDos";
import HeadDos from "../components/HeadDos";

const Detalles = () => {
  const { detalle_id } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/productos/${detalle_id}`)
      .then((res) => res.data)
      .then((productos) => {
        setProductos(productos);
      });
  }, [detalle_id]);

  console.log(productos);

  return (
    <>
      <HeadDos />
      <NavDos />
    </>
  );
};

export default Detalles;
