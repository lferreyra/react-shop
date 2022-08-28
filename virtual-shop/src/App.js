import './App.css';
import Destacados from './componentes/Destacados';
import Footer from './componentes/footer';
import Header from './componentes/Header';
import Promoapp from './componentes/Promoapp';
import Cupones from './componentes/Promos';

function App() {
  return (
   <div className='container-fluid fondo_amarillo'>
    <Header />
    <hr />
    <Destacados />
    <Cupones />
    <Promoapp />
    <Footer />
    
   </div>
  );
}

export default App;
