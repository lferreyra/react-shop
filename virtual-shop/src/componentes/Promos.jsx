import React from "react";
import cupon1 from "./imagenes/fcb65159d8487f97f3485d53a0d85a2f.jpeg";
import cupon2 from "./imagenes/04f35bb95f283929c007f7a35d1b9624.jpeg";
import cupon3 from "./imagenes/1933f73b788eee2d2c3441d547b4975c.jpeg";


const Cupones = () => {
    return (
        <div className="Container my-5"> 
         <div className="row">
            <div className="col-md-4">
                <img src={cupon1} alt="desayuno" className="img-fluid rounded" />
            </div>
            <div className="col-md-4">
                <img src={cupon2} alt="sundae" className="img-fluid rounded" />
            </div>
            <div className="col-md-4">
                <img src={cupon3} alt="desayuno3" className="img-fluid rounded" />
            </div>
        </div>
        </div>
    )
}

export default Cupones;