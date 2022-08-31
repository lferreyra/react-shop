import './App.css';
import CartWidjet from './componentes/CartWidjet';
import Destacados from './componentes/Destacados';
import Footer from './componentes/footer';
import Navbar from './componentes/Navbar';
import Promoapp from './componentes/Promoapp';
import Cupones from './componentes/Promos';

function App() {

  const productos = ["Colchón de Frutas", "Jelly", "Yogur Frutilla", "Yogur Vainilla"];

  

  return (

   <div className='container-fluid fondo_amarillo'>
      <Navbar />
      <hr />
        
      <h2>¿Te gusta o te encanta?</h2>
    
      <Destacados /> 
      
      <h5>Lista De Productos</h5>
      <CartWidjet items={productos} titulo="CartWidjet" /> 
      
      <Cupones />
      <Promoapp />
      <Footer />
    
   </div>
  );
}

export default App;
