import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';

import Login from './pages/Login'

import Cadastro from './pages/Cadastro'

import Routes from './Routes'

import './App.css'


function App() {

  const [user, setUser] = useState('/Login')
  const [Cadastro, setCadastro] = useState('/Cadastro')
  

  if(user === null ){
    return (
      <Login />,
      <Cadastro />
    );
  }

  
  return (
    <BrowserRouter>
    <Header />

      <Routes /> 

    <Footer />
    </BrowserRouter>
  );
}

export default App;
