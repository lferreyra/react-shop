import React from 'react';



const Item = ({ item }) => {
    return (
        <div className="card py-">
            <img src={item.imagen} className="card-img-top" alt={item.nombre} />
            <div className="card-body">
            <h5 className="card-title text-center"><b>{item.nombre}</b></h5>
               <p className="card-text text-center"> {item.descripcion} </p>
               <p className="card-text text-center">${item.precio}</p>
               <a href={item.permalink} class="btn btn-primary">Comprar</a>
           </div>
        </div>
   
    )
};

export default Item;

