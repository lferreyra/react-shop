import React from 'react';
import Item from  "./Item"

const ItemList = ({items}) => {
    return (
    <div className="row py-3">
        {items.map(item => (
        <div className="col-md-3">
            <Item item={item} />
        </div>
        )
    )}
    </div>
    )
}   

export default ItemList;