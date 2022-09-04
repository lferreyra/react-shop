import React from "react";
import fb from "./imagenes/SM-RRSS-04.png";
import ig from "./imagenes/SM-RRSS-03.png";

const Footer = () => {
    return (
      <div className="row fondo_footer">
        <div className="container pt-5"> 
            <div className="row text-white">
            <hr />
                <div className="col col-lg-10">
                <p>TM © 2017 Danucci S.A. Todos los derechos reservados.</p>    
                </div>
               
                <div className="col col-lg-1 ">
                    <img src={fb} width="24" alt="Facebook" href="https://www.facebook.com/DanucciOK/" />
                    <img src={ig} width="24" alt="Instagram" href="https://www.instagram.com/danucciok/?hl=es" />
                </div>
            </div>
        </div>
      </div>    
    )
}
export default Footer;