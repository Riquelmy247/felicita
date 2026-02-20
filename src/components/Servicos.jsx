import React from "react";
import { config } from "../data/config";

const iconMap = {
  "Balões Personalizados": "🎈",
  "Decorações": "🎉",
  "Presentes": "🎁"
};

const Servicos = () => {
  return (
    <div className="section-content">
      <h2 className="section-title">Serviços</h2>
      <p className="section-subtitle">
        Cuidamos de cada detalhe para que sua comemoração seja inesquecível.
      </p>
      <div className="cards-grid">
        {config.services.map((service) => (
          <div key={service} className="card service-card">
            <div className="service-icon">
              <span aria-hidden="true">{iconMap[service] || "🎈"}</span>
            </div>
            <h3>{service}</h3>
            <p>
              {service === "Balões Personalizados" &&
                "Arranjos, buquês, arcos, painéis e kits personalizados para qualquer tema ou ocasião."}
              {service === "Decorações" &&
                "Montagem completa de cenários com balões, painéis, letras, flores e muito mais."}
              {service === "Presentes" &&
                "Caixas personalizadas, kits surpresa, balões com mensagens e mimos especiais para quem você ama."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicos;
