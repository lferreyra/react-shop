import React from 'react'
import { useState, useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

            useEffect(() => {
                const productos = [
                        {id:1, "nombre":"Colchón de Frutas", "descripción":"Trozos de pera, durazno y ananá, con una suave capa crema descremada y crocante granola con miel que lo completan todo.", "peso":"350g.", "imagen":"https://i.postimg.cc/2SS3m799/10.png", "precio":350},
                        {id:2, "nombre":"Jelly", "descripción":"Trozos de pera, durazno y ananá, con una deliciosa gelatina de cereza y una suave crema descremada para tu deleite.", "peso":"350g.", "imagen":"https://i.postimg.cc/R03FJVBc/11.png", "precio":350},
                        {id:3, "nombre":"Yogur Mousse de Frutilla", "descripción":"Trozos de pera, durazno y ananá, con un suave mousse de yogur descremado y crocante granola tostada.", "peso":"350g.", "imagen":"https://i.postimg.cc/650TDmcG/9.png", "precio":350},
                        {id:4, "nombre":"Yogur Mousse de Vainilla", "descripción":"Trozos de pera, durazno y ananá, con un suave mousse de yogur descremado y crocante granola tostada.", "peso":"350g.", "imagen":"https://i.postimg.cc/sxP1f6Rq/8.png", "precio":350},
                        {id:5, "nombre":"Colchón de Frutas VEGANO", "descripción":"Trozos de pera, durazno y ananá, con un suave crema NO LACTEA y crocante granola tostada.", "peso":"350g.", "imagen":"https://i.postimg.cc/ZqqN7ShR/7.png", "precio":350},

                    ];

const getProductos = new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(productos);
                    }, 2000);
                });
        
                getProductos.then((respuesta) => {
                    setItems(respuesta);
                });
            }, []);
        
            return (
                <div className="container">
                    <ItemList items={items} />
                </div>
            )
        }

export default ItemListContainer



