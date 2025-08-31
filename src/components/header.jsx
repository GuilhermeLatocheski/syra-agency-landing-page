
// src/components/Header.jsx
import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.png'; // Coloque seu logo em src/assets
import { FaBars, FaTimes } from 'react-icons/fa'; // Ícones para o menu

const Header = () => {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para fechar o menu (útil ao clicar em um link)
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <img src={logo} alt="Syra Agency Logo" className={styles.logo} />

      {/* Navegação Principal */}
      {/* Aplicamos uma classe condicional para mostrar/esconder o menu */}
      <nav className={`${styles.navbar} ${isMenuOpen ? styles.navbarOpen : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#sobre" onClick={closeMenu}>Sobre Nós</a>
        <a href="#missao" onClick={closeMenu}>Missão</a>
        <a href="#servicos" onClick={closeMenu}>Serviços</a>
        <a href="#diagnostico" onClick={closeMenu}>Diagnóstico</a>
      </nav>

      {/* Botão Hambúrguer/Fechar */}
      <button className={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </button>
    </header>
  );
};

export default Header;