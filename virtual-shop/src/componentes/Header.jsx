import React from "react";
import logo from ".//imagenes/Burger-King-Logo-CMS.png";

const Header = () => {
    return(
        <div className="container"> 
            <ul className="nav d-flex align-items-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="bureguer.com"><img src={logo} width="48" alt="Logo" /></a> 
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="promos.com">Pedí tu combo favorito</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="combo.com">Menú</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="burger.com">Cupones</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;

