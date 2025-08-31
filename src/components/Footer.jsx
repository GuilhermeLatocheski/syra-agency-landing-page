// src/components/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <p>Email: contato@syraagency.com</p>
        <p>Telefone: (XX) 91234-5678</p>
      </div>
      <div className={styles.social}>
        {/* Adicione ícones de redes sociais aqui */}
        <a href="#"><FaInstagram size={24} /></a>
        <a href="#"><FaLinkedin size={24} /></a>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Syra Agency. Todos os direitos reservados.</p>
        <a href="#">Política de Privacidade</a>
      </div>
    </footer>
  );
};

export default Footer;