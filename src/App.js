import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero/index.js';
import Products from './components/Products/index';
import { productData, productData2 } from './components/Products/data';
import Feature from './components/Feature/index';
import Footer from './components/Footer';

function App() {
  return (
    <Router className="App">
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favourite" data={productData}></Products>
      <Feature />
      <Products heading="Sweet Treats for You" data={productData2}></Products>
      <Footer />
    </Router>
  );
}

export default App;

