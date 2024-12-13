import React from 'react'
import { Link } from "react-router";
import "./HeroHome.css";

export const HeroHome = () => {
  return (
    <section className="container hero py-5 d-flex flex-column flex-lg-row align-items-center justify-content-lg-between justify-content-evenly">
        <div className="hero__text">
            <h1>React components</h1>
            <p>En este sitio, podrás explorar una colección de componentes React que he creado y que puedes integrar fácilmente en tus propios proyectos. Cada componente viene acompañado de su código JSX y CSS, para que puedas personalizarlos y adaptarlos según tus necesidades. ¡Aprovecha y lleva tus proyectos al siguiente nivel con componentes listos para usar!</p>
        </div>
        <Link to="/component-viewer" className="hero__button">Components <i className="fa-solid fa-angles-right"></i></Link>
    </section>
  )
}
