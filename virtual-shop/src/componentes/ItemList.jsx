import React from 'react';
import Item from  "./Item"

const ItemList = ({items}) => {
    return (
    <div className='row'>
        {items.map(item => (
        <div key={item.id} className="col-md-4 py-3">
            <Item id={item.id}  nombre={item.nombre} descripcion={item.descripcion} peso={item.peso} precio={item.precio} imagen={item.imagen} />
        </div>)
    )}
    </div>
    )
}   



export default ItemList;