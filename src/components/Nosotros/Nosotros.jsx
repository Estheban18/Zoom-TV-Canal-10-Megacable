import React from "react";
import "./Nosotros.css";
import equipoImg from "../../assets/images/profesional1.jpg";

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <h2>Sobre Nosotros</h2>
      <p>Somos un canal comprometido con la información y la comunidad.</p>
      <img src={equipoImg} alt="Equipo profesional" className="equipo-img" />
    </div>
  );
};

export default Nosotros;
