import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home.js';
import Template from './Components/Template/Template.js';
import Menu from './Components/Menu/Menu.js';
import Nav from './Components/Nav/Nav.js'
import Footer from './Components/Footer/Footer.js'
import WaveDivider from './Components/WaveDivider/WaveDivider.js';
import About from './Components/About/About.js'
import Contact from './Components/Contact/Contact.js';
import LenisProvider from './Components/LenisProvider.js'
// import AdminDashboard from './Components/AdminDashboard/AdminDashboard.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <LenisProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<Template />}>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/o-nas' element={<About />} />
            <Route path='/kontakt' element={<Contact />} />
            {/* <Route path='/admin' element={<AdminDashboard />} /> */}
          </Route>
        </Routes>
        <WaveDivider flipped />
        <Footer />
      </BrowserRouter>
    </LenisProvider>
  </React.StrictMode>
);
