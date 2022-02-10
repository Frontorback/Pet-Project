import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import FirstHeader from './Pages/Header/FirstHeader';
import SecondHeader from './Pages/Header/SecondHeader';
import './index.scss'
import Home from './Pages/Home';
import Categories from './Pages/Сategories/Categories';
import Footer from './Pages/Footer/Footer';
import FruitAndVegetables from './Pages/FruitAndVegetables';
import Bakery from './Pages/Bakery';
import MeatAndFish from './Pages/MeatAndFish';
import Cart from './Pages/Cart';
import Search from './Pages/Search';
import Drinks from './Pages/Drinks';
import Kitсhen from './Pages/Kitchen';



const App = () =>{
  return (
    <div className="body">
      <BrowserRouter>
        <FirstHeader />
        <SecondHeader />
        <Categories/>  
        <Routes>
          
          <Route path="/" element={<Home />}/>
          <Route path="/Bakery" element={<Bakery />}/>
          <Route path="/Fruit-and-vegetables" element={<FruitAndVegetables />}/>
          <Route path="/Meat-and-fish" element={<MeatAndFish />}/>
          <Route path="/Drinks" element={<Drinks />}/>
          <Route path="/Kitchen" element={<Kitсhen />}/>
          <Route path="/Cart" element={<Cart />}/>
          <Route path="/Search" element={<Search />}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
