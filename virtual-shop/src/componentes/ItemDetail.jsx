import React from 'react';
import ItemCount from './ItemCount';




const ItemDetail = ( {item} ) => {
  return (
    <div className="detail">
        <img scr={item.imagen} alt={item.nombre} />
        console.log({item.imagen});
        <div className="infoDetail">
            {item.nombre}
            <p>{item.descripcion}</p>
            <h3>${item.precio}</h3>

            <ItemCount stock={10} initial={1} />
          
        </div>
    </div>
  );
};

export default ItemDetail;