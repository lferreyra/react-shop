import React from 'react';



const Item = ({id, nombre, descripcion, peso, imagen, precio}) => {
    return (
      <div  className="py-3"> 
        <div className="card">
            <img src={imagen} className="card-img-top" alt={nombre} />
            <div className="card-body">
            <h5 className="card-title text-center"><b>{nombre}</b></h5>
               <p className="card-text text-center"> {descripcion} ${precio}</p>
           </div>
        </div>
      </div>
   
    )
}

export default Item;

