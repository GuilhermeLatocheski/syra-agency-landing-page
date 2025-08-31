// src/sections/SobreNos.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Importe
import styles from './ContentSection.module.css'; // Reutilizaremos este estilo
import sobreImg from '../assets/sobre-nos.jpg'; // Adicione uma imagem

const SobreNos = () => {
  return (
    <motion.section
      id="sobre" 
      className={`${styles.section} ${styles.sectionLeft}`}
      initial={{ opacity: 0, y: 50 }} // Estado inicial (invisível e 50px abaixo)
      whileInView={{ opacity: 1, y: 0 }} // Anima para visível e posição original
      viewport={{ once: true }} // A animação ocorre apenas uma vez
      transition={{ duration: 1.0 }} // Duração da animação
    >
      <div className={styles.content}>
        <h2><b>Sobre Nós</b></h2>
        <p>
          A Syra é uma agência de neuromarketing 360°, concebida para transcender os limites convencionais do marketing tradicional. Nossa abordagem inovadora combina neurociência, psicologia comportamental e estratégias digitais avançadas para criar experiências de marca verdadeiramente transformadoras. Desenvolvemos soluções personalizadas que conectam empresas aos seus públicos de forma profunda e duradoura, gerando resultados mensuráveis e impacto real no mercado.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={sobreImg} alt="Equipe da Syra Agency" />
      </div>
    </motion.section>
  );
};

export default SobreNos;