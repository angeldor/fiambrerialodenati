import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contacto</h2>
          <p>Teléfono: (221) 545-1525</p>
          <p>Email: fiambrerialodenati@gmail.com</p>
        </div>
        <div className="footer-section">
          <h2>Horario de Atención</h2>
          <p>Lunes a Sábados: 9:00 hs - 14:00 hs</p>
          <p>Domingos: Cerrado</p>
        </div>
        <div className="footer-section">
          <h2>Dirección</h2>
          <p>Plaza Belgrano e/ 473 Cantilo y 14b, City Bell</p>
          <p>La Plata, Buenos Aires, Argentina</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
