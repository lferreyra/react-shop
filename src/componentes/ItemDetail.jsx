import React from 'react';




const ItemDetail = ( {items} ) => {
  return (
    <div className="detail">
      {items.map((item) => (
      <div key={item.id}> 
          <div>
            <img scr={item.imagen} alt={item.nombre} />
            </div> 
            <span>{item.nombre}</span> 
            <p>{item.descripcion}</p>
            <h3>${item.precio}</h3>
         </div>
     )
    )}
  </div>
   
  )
  }

export default ItemDetail;