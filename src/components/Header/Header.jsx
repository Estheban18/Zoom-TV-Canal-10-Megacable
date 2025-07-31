import React from 'react';
import Navbar from '../Navbar';
import './Header.css';
import logo from '../../assets/images/logo-zoomtv-mega.png';

const Header = () => {
  return (
    <header className="header-megav">
      <div className="header-top-megav">
        <div className="logo-container">
          <img src={logo} alt="Zoom TV Canal 10 MegaV Megacable" className="logo-megav" />
          <div className="channel-info">
            <h1 className="channel-title">Zoom TV Canal 10</h1>
            <h2 className="provider-name">MMegacable</h2>
          </div>
        </div>
        <div className="header-actions">
          <button className="btn-live">EN VIVO</button>
          <button className="btn-contact">CONTACTO</button>
        </div>
      </div>
      <Navbar theme="megav" />
    </header>
  );
};

export default Header;