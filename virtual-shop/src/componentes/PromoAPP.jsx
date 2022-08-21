import React from "react";
import celu from "./imagenes/celular.png";
import gplay from "./imagenes/google_play.png"
import apple from "./imagenes/app__store.png";


const PromoAPP = () => {
    return (
        <div className="row fondo_app">
           <div className="col-md-4 offset-md-2 pt-5 my-3 text-center">
                    <img scr={celu} alt="celular" width="480" />
           </div>
           <div className="col-md-4 pt-5 text-white">
             <h1>Descargá la APP y disfrutá mucho más por mucho menos</h1>

             <p><img scr={gplay} alt="google play" width="135"  /> 
             <img scr={apple} alt="Apple store" width="135"  /></p>

             <p>Apple y el logotipo de Apple son marcas comerciales de Apple Inc., registradas en EE. UU. Y otros países. App Store es una marca de servicio de Apple Inc. Google Play es una marca comercial de Google Inc. Se aplican términos.</p>

                
            </div>
        </div>
       
    )
}

export default PromoAPP