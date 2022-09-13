import './App.css';
import Destacados from './componentes/Destacados';
import Footer from './componentes/footer';
import ItemCount from './componentes/ItemCount';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';
import PromoApp from './componentes/Promoapp';
//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailContainer';


function App() {


  

  return (

   <div className='container-fluid fondo_amarillo'>
      <Navbar />
      <hr />
        
      <h2>¿Te gusta o te encanta?</h2>
    
      <Destacados /> 
      
      <h3 className="text-center">Disfruta de nuestros productos</h3>
      <ItemListContainer />
      <ItemDetailContainer />
      <ItemCount stock={5} initial={1} onadd={0}/>
      <PromoApp />
    
      <Footer />
    
   </div>
  );
}

export default App;
