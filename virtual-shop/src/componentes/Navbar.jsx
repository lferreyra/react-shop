import React from "react";
import logo from ".//imagenes/logoDANUCCI.png";
import Carrito from "./Menu/basket2-fill.svg";

const Navbar = () => {
    return(
        <div className="container"> 
            <ul className="nav d-flex align-items-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><img src={logo} width="48" alt="Logo" /></a> 
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="#">Pedí tu Danucci</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="#">Catalogo</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="#">Promos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="#">Contacto</a>
                </li>
                <li >
                <svg width="20" alt="carrito"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-">
                <path href="#" strokeLinecap="round" strokeLinejoin="round"  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                </li>
                
            </ul>
        </div>
    )
}

export default Navbar;

