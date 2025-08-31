// src/sections/Missao.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Importe
import styles from './ContentSection.module.css'; // Reutilizando o mesmo estilo
import missaoImg from '../assets/missao.jpg';

const Missao = () => {
  return (
    <motion.section
          id="sobre" 
          className={`${styles.section} ${styles.sectionLeft}`}
          initial={{ opacity: 0, y: 50 }} // Estado inicial (invisível e 50px abaixo)
          whileInView={{ opacity: 1, y: 0 }} // Anima para visível e posição original
          viewport={{ once: true }} // A animação ocorre apenas uma vez
          transition={{ duration: 1.0 }} // Duração da animação
    >
      <section id="missao" className={`${styles.section} ${styles.sectionRight} ${styles.bgDark}`}>
        
        {/* 1. Invertemos a ordem: o 'content' (texto) agora vem primeiro no código */}
        <div className={styles.content}>
          <h2><b>Nossa Missão</b></h2>
          <p>
            A missão da Syra é revolucionar o conceito de agência convencional, oferecendo uma experiência completa de neuromarketing que vai além das expectativas tradicionais. Buscamos transformar a forma como as marcas se comunicam e se relacionam com seus públicos, utilizando insights neurocientíficos para criar campanhas mais eficazes, autênticas e memoráveis. Nosso compromisso é entregar resultados excepcionais através de estratégias baseadas em evidências científicas e criatividade disruptiva.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <img src={missaoImg} alt="Visão da Syra Agency" />
        </div>

      </section>
    </motion.section>
  );
};

export default Missao;