import React from "react";
import { config } from "../data/config";

const QuemSomos = () => {
  return (
    <div className="section-content">
      <h2 className="section-title">Quem Somos</h2>
      <p className="section-subtitle">
        {config.companyName} é especializada em{" "}
        <strong>balões personalizados, decorações criativas e presentes
        exclusivos</strong> para todas as ocasiões.
      </p>
      <p className="section-text">
        Trabalhamos com muito carinho para deixar aniversários, casamentos,
        chás revelação, inaugurações e todos os seus momentos ainda mais
        especiais. Cada detalhe é pensado para combinar com o seu estilo,
        criando experiências visuais únicas e cheias de emoção.
      </p>
      <blockquote className="quote">
        “{config.slogan}”
      </blockquote>
    </div>
  );
};

export default QuemSomos;
