import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';
import Destacados from "./componentes/Destacados"
import Promoapp from "./componentes/Promoapp"
import Footer from "./componentes/footer"
import Home from './componentes/Home';
import Contacto from "./componentes/Contacto"
import ItemDetailContainer from './componentes/ItemDetailContainer';





const App = () => {

  return (
    <div className='container-fluid'>
    <BrowserRouter> 
        <Navbar />
        <Destacados />
        <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/PediTuDanucci' element={<ItemDetailContainer />}/>
                <Route exact path='/Catalogo' element={<ItemListContainer />}/>
                <Route exact path='/Promos' element={<ItemListContainer />}/>
                <Route exact path='/Contacto' element={<Contacto />}/>
                    
        </Routes>
        <Promoapp />
        <Footer />
    </BrowserRouter>

</div>
)}
export default App;

