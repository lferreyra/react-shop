import './App.css';
import Destacados from './componentes/Destacados';
import Footer from './componentes/footer';
import ItemCount from './componentes/ItemCount';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';
import Promoapp from './componentes/Promoapp';


function App() {


  

  return (

   <div className='container-fluid fondo_amarillo'>
      <Navbar />
      <hr />
        
      <h2>¿Te gusta o te encanta?</h2>
    
      <Destacados /> 
      
      <h3 className="text-center">Disfruta de nuestros productos</h3>
      <ItemListContainer />
      <ItemCount stock={5} initial={1} onadd={0}/>
      <Promoapp />
      <Footer />
    
   </div>
  );
}

export default App;
