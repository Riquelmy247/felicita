import React from "react";
import { config } from "../data/config";

const Localizacao = () => {
  const mapsSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4515.607855192903!2d-48.23260669999999!3d-18.9467606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4500270f3a025%3A0x3e79f956ab251c45!2sAv.%20Angelino%20Favato%2C%20830%20-%20Granada%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038410-012!5e1!3m2!1spt-BR!2sbr!4v1771630199502!5m2!1spt-BR!2sbr";

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
