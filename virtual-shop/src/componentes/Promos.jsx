import React from "react";
import cupon1 from "./imagenes/8.png";
import cupon2 from "./imagenes/9.png";
import cupon3 from "./imagenes/10.png";
import cupon4 from "./imagenes/11.png";


const Cupones = () => {
    return (
        <div className="Container my-5"> 
         <div className="row">
            <div className="col-md-3">
                <img src={cupon1} alt="desayuno" className="img-fluid rounded" />
            </div>
            <div className="col-md-3">
                <img src={cupon2} alt="sundae" className="img-fluid rounded" />
            </div>
            <div className="col-md-3">
                <img src={cupon3} alt="desayuno3" className="img-fluid rounded" />
            </div>            
            <div className="col-md-3">
                <img src={cupon4} alt="desayuno4" className="img-fluid rounded" />
            </div>
           
        </div>
    </div>
    )
}

export default Cupones;
