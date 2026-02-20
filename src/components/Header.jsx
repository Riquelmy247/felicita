import React, { useState } from "react";
import { config } from "../data/config";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo-area">
          <img src={config.logo} alt={config.companyName} className="logo" />
          <div className="logo-text">
            <h1>{config.companyName}</h1>
            <p>{config.slogan}</p>
          </div>
        </div>
        <button
          type="button"
          className={`mobile-menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={handleToggleMenu}
          aria-label="Abrir menu de navegação"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`header-right ${menuOpen ? "open" : ""}`}>
          <nav className="nav" onClick={handleNavClick}>
            <a href="#quem-somos">Quem Somos</a>
            <a href="#servicos">Serviços</a>
            <a href="#galeria">Galeria</a>
            <a href="#contato">Contato</a>
            <a href="#localizacao">Localização</a>
          </nav>
          <div className="header-actions">
            <a
              href={config.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              WhatsApp
            </a>
            <a
              href={config.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-instagram"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
