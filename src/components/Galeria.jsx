import React, { useState, useEffect } from "react";
import { config } from "../data/config";

const Galeria = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % config.galleryImages.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + config.galleryImages.length) %
        config.galleryImages.length
    );
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section-content">
      <h2 className="section-title">Galeria</h2>
      <p className="section-subtitle">
        Alguns dos trabalhos que já encheram de cor e alegria as festas dos
        nossos clientes.
      </p>
      <div className="carousel">
        <button
          type="button"
          className="carousel-control prev"
          onClick={prev}
          aria-label="Anterior"
        >
          ‹
        </button>
        <div className="carousel-window">
          <img
            src={config.galleryImages[currentIndex]}
            alt={`Decoração ${currentIndex + 1}`}
            className="carousel-image"
          />
        </div>
        <button
          type="button"
          className="carousel-control next"
          onClick={next}
          aria-label="Próxima"
        >
          ›
        </button>
      </div>
      <div className="carousel-dots">
        {config.galleryImages.map((img, index) => (
          <button
            key={img}
            type="button"
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ver imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Galeria;
