import React from "react";
import { config } from "./data/config";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuemSomos from "./components/QuemSomos";
import Servicos from "./components/Servicos";
import Galeria from "./components/Galeria";
import Contato from "./components/Contato";
import Localizacao from "./components/Localizacao";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <section id="quem-somos" className="section">
          <QuemSomos />
        </section>

        <section id="servicos" className="section section-alt">
          <Servicos />
        </section>

        <section id="galeria" className="section">
          <Galeria />
        </section>

        <section id="contato" className="section section-alt">
          <Contato />
        </section>

        <section id="localizacao" className="section">
          <Localizacao />
        </section>
      </main>
      <Footer />

      <a
        href={config.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Fale conosco pelo WhatsApp"
      >
        💬
      </a>
    </div>
  );
};

export default App;
