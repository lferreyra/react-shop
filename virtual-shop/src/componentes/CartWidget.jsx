import React from 'react';


const CartWidget = (props) => {
  return(
      <div className="container"> 
          <ul className="nav d-flex align-items-center">
              <li >
               <span className="material-symbols-outlined">shopping_basket</span>
               <span>0</span>
              </li>
              
          </ul>
      </div>
  )
}

export default CartWidget