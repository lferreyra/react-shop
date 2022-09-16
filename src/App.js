import React from 'react';
import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';
import Destacados from "./componentes/Destacados"
import Footer from "./componentes/footer"
import Promoapp from "./componentes/Promoapp"



function App() {

  return (
    <div className='container-fluid'>
 <Navbar />
 <Destacados />
 <ItemListContainer />
 <ItemDetailContainer />


<Promoapp />
<Footer />


</div>
)}
export default App;


