import React from 'react'
import Carrito from "./imagenes/carrito.png"

const CartWidget = (props) => {
  return(
      <div className="container"> 
          <ul className="nav d-flex align-items-center">
              <li >
              <a className="nav-link link_header" href=" "><img src={Carrito} width="20" alt="Carrito" /></a>
              </li>
              
          </ul>
      </div>
  )
}

export default CartWidget