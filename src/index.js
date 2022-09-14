import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Destacados from './componentes/Destacados';
import Footer from './componentes/footer';
import Navbar from './componentes/Navbar';
import Promoapp from './componentes/Promoapp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Navbar />
    <hr />
    <h2>¿Te gusta o te encanta?</h2>
    <Destacados />
    <App />
    <Promoapp />
    <Footer />
  

    
  </React.StrictMode>
);


