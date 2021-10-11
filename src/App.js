import React, { useEffect, useRef } from "react";
import Banner from './components/Banner/Banner';
import BestProduct from './components/BestProduct/BestProduct';
import Story from './components/BrandStory/Story';
import Clip from "./components/Clip/Clip";
import CustomCursor from './components/CustomCursor/CustomCursor';
import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import News from './components/News/News';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';
import './style.css';


function App() {


  return (
    <div className="App">
      <main>
        <Header />
        <Banner />
        <Introduction />
        <BestProduct />
        <ProductList />
        <Story />
        <News />
        <Clip />
        <Footer />
      </main>
    </div>
  );
}

export default App;
