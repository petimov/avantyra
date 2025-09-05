import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Lenis from '@studio-freight/lenis';
import Template from './Components/Template/Template';
import Menu from './Components/Menu/Menu';
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import WaveDivider from './Components/WaveDivider/WaveDivider';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact';
import ScrollToTop from './utils/ScrollTopTop';
import LenisProvider from './Components/LenisProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <LenisProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route element={<Template />}>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/o-nas' element={<About />} />
            <Route path='/kontakt' element={<Contact />} />
          </Route>
        </Routes>
        <WaveDivider flipped />
        <Footer />
      </BrowserRouter>
    </LenisProvider>
  </React.StrictMode>
);
