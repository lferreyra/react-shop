import React from 'react'
import { useState } from 'react';

const ItemCount = ({stock, initial, onadd}) => {
    const [cantidad, setCantidad] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(onadd); 

    const decrementarCantidad = (valor) => {
       if (valor > 0) {
        setCantidad(valor);}
       }
    
    const incrementarCantidad = (valor) => {
        if (valor <= itemStock) {
        setCantidad(valor);}
       }

    const agregarProductos = () => {
        if (cantidad <= itemStock){
            setItemStock(itemStock - cantidad)
       setItemAdd(itemAdd + cantidad);}
       }

  return (   
    <div className='container py-5'>
        <div className="row"> 
          <div className='col-md-2'>
            <p className="text-center">Nombre del producto</p>
            <div className="input-group">
                <input type="button" className="btn btn-secondary" value="-" onClick= {() => 
                {decrementarCantidad(cantidad - 1)}} />
                <input type="text" className="form-control" value={cantidad} />
                <input type="button" className="btn btn-secondary" value="+" onClick= {() => 
                {incrementarCantidad(cantidad + 1)}} />
            </div>  
            <div className="d-grid gap-2 py-3">
             <imput type="button" className="btn btn-secondary" value="Agregar" onClick={() => {agregarProductos()}}>Agregar</imput>  
            </div>
            <p>Productos seleccionados: {itemAdd}</p>
          </div>
        </div>            
    </div>
  )
 }

export default ItemCount