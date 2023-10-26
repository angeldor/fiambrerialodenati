import React from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className="containerNavbar">
        <Link to="/">
          <h4>Fiambreria y Queseria Lo de Nati</h4>
        </Link>
        <ul className="categories">
          <Link>
            <li>Inicio</li>
          </Link>
          <Link>
            <li>Productos</li>
          </Link>
          <Link>
            <li>Promociones</li>
          </Link>
        </ul>
        <Link>
          <li>Pedidos Online</li>
        </Link>
        <Link>
          <li>Nuestra Historia</li>
        </Link>
        <Link>
          <li>Contacto</li>
        </Link>
        <CartWidget />
      </div>
    </>
  );
};
