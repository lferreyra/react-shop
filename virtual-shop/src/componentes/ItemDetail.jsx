import React from 'react';
import ItemCount from "./ItemCount";





const ItemDetail = ( {item} ) => {
  return (
    <div className='row'>
    <div className="detail">
    <img src={item.imagen} alt={item.nombre} />
      <div className="infodetail"> 
        <h2>{item.nombre}</h2>
           <span>{item.nombre}</span> 
            <p>{item.descripcion}</p>
            <h3>${item.precio}</h3>  
              <ItemCount stock={10} initial={1} />
        </div>
      </div>
   </div>
    );
  };

export default ItemDetail;