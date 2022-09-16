import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetail from './componentes/ItemDetail';
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
    <Routes>
        <Route path='/menu' element={<ItemListContainer/>}/>
        <Route path='' element={<Promoapp/>}/>
        <Route path='' element={<ItemDetail/>}/>
        <Route path='/menu/detail' element={<ItemDetailContainer/>}/>
    </Routes>
<Promoapp />
<Footer />


</div>
)}
export default App;


