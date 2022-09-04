import React from "react";
import celu from "./imagenes/celuDANUCCI.png";



const Promoapp = () => {
    return (
        <div className="row fondo_app">
           <div className="col-md-4 offset-md-2 pt-5  text-center">
                    <img src={celu} width="480" alt="Facebook" href="https://www.facebook.com/DanucciOK/" />
           </div>
           <div className="col-md-4 pt-5">
             <h1>No dejes de visitar nuestras redes sociales</h1>
  
             <p>Instagram y el logotipo de Instagram son marcas comerciales de Meta Inc., registradas en EE. UU. Y otros países. App Store es una marca de servicio de Apple Inc. Google Play es una marca comercial de Google Inc. Se aplican términos.</p>

                
            </div>
        </div>
          
    )
}

export default Promoapp