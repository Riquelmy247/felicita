import React from "react";
import { config } from "../data/config";

const Contato = () => {
  return (
    <div className="section-content">
      <h2 className="section-title">Contato</h2>
      <p className="section-subtitle">
        Fale conosco e vamos planejar juntos a sua próxima comemoração.
      </p>
      <div className="contact-actions">
        <a
          href={config.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp big"
        >
          Falar no WhatsApp
        </a>
        <a
          href={config.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-instagram big"
        >
          Ver Instagram
        </a>
      </div>
    </div>
  );
};

export default Contato;
