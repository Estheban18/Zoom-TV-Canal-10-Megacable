import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/LOGO ZOOM TV 2.jpg" alt="Zoom TV Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/Inicio">Inicio</Link></li>
        <li><Link to="/Nosotros">Nosotros</Link></li>
        <li><Link to="/Regionales">Regionales</Link></li>
        <li><Link to="/Nacionales">Nacionales</Link></li>
        <li><Link to="/RedesSociales">Redes Sociales</Link></li>
        <li><Link to="/ActualidadNoticias">Actualidad</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
