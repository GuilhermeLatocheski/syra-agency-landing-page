// src/sections/Diagnostico.jsx
import React, { useState } from 'react';
import styles from './Diagnostico.module.css';

const Diagnostico = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xvgbgqne", { // <-- COLE SEU ENDPOINT AQUI
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("Obrigado! Sua mensagem foi enviada.");
        form.reset();
      } else {
        setStatus("Oops! Houve um problema ao enviar seu formulário.");
      }
    } catch {
      setStatus("Oops! Houve um problema ao enviar seu formulário.");
    }
  };

  return (
    <section id="diagnostico" className={styles.diagnostico}>
      <h2><b>Diagnóstico de Marca</b></h2>
      <p className={styles.subtitulo}>
        Preencha o formulário abaixo para receber uma análise preliminar gratuita do potencial neurológico da sua marca.
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="name" placeholder="Seu Nome" required />
        <input type="email" name="email" placeholder="Seu Melhor E-mail" required />
        <textarea name="message" rows="5" placeholder="Descreva brevemente seu negócio e seu principal desafio de marketing." required></textarea>
        <button type="submit">Enviar Análise</button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </section>
  );
};

export default Diagnostico;