import React from "react";
import { config } from "../data/config";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          © {year} {config.companyName}. Todos os direitos reservados. Desenvolvido por @riquelmy_2612.
        </p>
        <p className="footer-links">
          <a
            href={config.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          {" · "}
          <a
            href={config.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
