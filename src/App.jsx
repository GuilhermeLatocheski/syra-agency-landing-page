import './App.css'
import React from 'react';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import SobreNos from './sections/SobreNos';
import Missao from './sections/Missao';
import Servicos from './sections/Servicos';
import Diagnostico from './sections/Diagnostico';
import Footer from './components/Footer';
import './index.css'; // Importando o CSS global

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <SobreNos />
      <Missao />
      <Servicos />
      <Diagnostico />
      <Footer />
    </>
  )
}

export default App
