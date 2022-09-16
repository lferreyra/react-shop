import React from "react";
import logo from ".//imagenes/logoDANUCCI.png";
import CartWidget from "./CartWidget";


const Navbar = () => {
    return(
        <div className="container"> 
            <ul className="nav d-flex align-items-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="./"><img src={logo} width="48" alt="Logo" /></a> 
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="./menu">Pedí tu Danucci</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="./menu/detail">Catalogo</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="./menu/detailContainer">Promos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="./cupones">Contacto</a>
                </li>
                <li >
                <CartWidget />
                </li>
                
            </ul>
        </div>
    )
}

export default Navbar;

