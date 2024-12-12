import React from "react";
import { Link } from "react-router";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="home">
        <div className="container content d-flex flex-column align-items-center justify-content-center">
            <section className="content__text mb-3">
                <h1>React components</h1>
                <p>En este sitio, podrás explorar una colección de componentes React que he creado y que puedes integrar fácilmente en tus propios proyectos. Cada componente viene acompañado de su código JSX y CSS, para que puedas personalizarlos y adaptarlos según tus necesidades. ¡Aprovecha y lleva tus proyectos al siguiente nivel con componentes listos para usar!</p>
            </section>
            <Link to="/component-viewer" className="content__link">Components <i className="fa-solid fa-angles-right"></i></Link>
        </div>
    </div>
  );
};