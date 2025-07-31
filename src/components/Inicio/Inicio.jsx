import React from "react";
import "./inicio.css";
import banner from "../../assets/images/LOGO ZOOM TV 2.jpg";
import equipoImg from "../../assets/images/LOGO ZOOM TV 2.jpg"; // Pick the correct relative path

const Inicio = () => {
  return (
    <main className="inicio-container">
      <img src={banner} alt="Banner Principal" className="banner" loading="lazy" />
      {/* You can use equipoImg somewhere inside */}
      <img src={equipoImg} alt="Equipo Profesional" className="equipo-img" loading="lazy" />
      {/* más contenido */}
    </main>
  );
};

export default Inicio;
