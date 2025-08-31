// src/sections/HeroSection.jsx
import React from 'react';
import styles from './HeroSection.module.css';
import backgroundVideo from '../assets/background-video.mp4'; 

const HeroSection = () => {
  return (
    <section id="home" className={styles.hero}>
      <video autoPlay loop muted className={styles.video}>
        <source src={backgroundVideo} type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Syra Agency</h1>
        <p className={styles.subtitle}>Marketing. Neurociência. Resultados.</p>
      </div>
    </section>
  );
};

export default HeroSection;