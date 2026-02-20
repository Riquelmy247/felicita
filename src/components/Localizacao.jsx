import React from "react";
import { config } from "../data/config";

const Localizacao = () => {
  const mapsSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.739329430401!2d-48.292!3d-18.905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFelicit%C3%A1%20Bal%C3%B5es!5e0!3m2!1spt-BR!2sbr!4v1700000000000";

  return (
    <div className="section-content">
      <h2 className="section-title">Localização</h2>
      <p className="section-subtitle">
        Venha nos visitar ou faça sua encomenda diretamente pelo WhatsApp.
      </p>
      <p className="section-text">
        <strong>Endereço:</strong> {config.address}
      </p>
      <div className="map-container">
        <iframe
          src={mapsSrc}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa Felicitá Balões"
        ></iframe>
      </div>
    </div>
  );
};

export default Localizacao;
