import './App.css';
import ItemDetail from './componentes/ItemDetail';
import ItemListContainer from './componentes/ItemListContainer';




function App() {

  return (

      <div className='container-fluid  fondo_amarillo'>     
          <h3 className="text-center">Disfruta de nuestros productos</h3>
          <ItemListContainer />
          <ItemDetail />
          
      

   </div>
  );
}

export default App;


