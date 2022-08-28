import './App.css';
import Destacados from './componentes/Destacados';
import Footer from './componentes/footer';
import Navbar from './componentes/Navbar';
import Promoapp from './componentes/Promoapp';
import Cupones from './componentes/Promos';

function App() {
  return (
   <div className='container-fluid fondo_amarillo'>
    <Navbar />
    <hr />
    <h2>¿Te gusta o te encanta?</h2>
  
    <Destacados />
    <Cupones />
    <Promoapp />
    <Footer />
    
   </div>
  );
}

export default App;
