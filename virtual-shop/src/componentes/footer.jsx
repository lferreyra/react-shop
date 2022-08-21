import React from "react";
import fb from "./imagenes/SM-RRSS-04.png";
import ig from "./imagenes/SM-RRSS-03.png";
import yt from "./imagenes/SM-RRSS-02.png";
import tw from "./imagenes/SM-RRSS-01.png";

const Footer = () => {
    return (
      <div className="row fondo_footer">
        <div className="container pt-5"> 
            <div className="row text-white">
            <hr />
                <div className="col-md-6">
                <p>TM © 2021 Burger King Corporation. Todos los derechos reservados.</p>    
                </div>
                <div className="col-md-6">
                    <img src={fb} width="24" alt="Facebook" />;
                    <img scr={ig} width="24" alt="Instagram" />;
                    <img scr={yt} width="24" alt="Youtube" />;
                    <img scr={tw} width="24" alt="Twitter" />;
                </div>
            </div>

        </div>
      </div>    
    )
}
export default Footer;