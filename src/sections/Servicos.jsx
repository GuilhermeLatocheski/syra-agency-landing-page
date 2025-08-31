// src/sections/Servicos.jsx
import React from 'react';
import styles from './Servicos.module.css';

// Você pode criar um componente Card separado ou defini-lo aqui
const ServiceCard = ({ title, description }) => (
  <div className={styles.card}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Servicos = () => {
  const services = [
    { title: "SyraSense", description: "O SyraSense transforma experiências em vivências sensoriais únicas, combinando eventos in loco e campanhas estratégicas que envolvem todos os sentidos. Desenvolvemos identidade olfativa exclusiva, trilhas sonoras 8D personalizadas e ativações integradas ao digital, todas fundamentadas em diagnósticos precisos. Cada projeto é 100% individualizado, garantindo impacto, sofisticação e uma percepção de exclusividade incomparável." },
    { title: "SyraCore", description: "O SyraCore oferece reformulação de marca baseada em neuromarketing avançado, onde cada elemento — do design à comunicação — é meticulosamente planejado para gerar conexão emocional, autoridade e percepção de valor premium. Nossas estratégias são fundamentadas em diagnósticos detalhados, resultando em marcas coesas, memoráveis e únicas, com presença e reconhecimento que refletem liderança e distinção no mercado." },
    { title: "SyraScale", description: "O SyraScale aplica estratégias de crescimento e expansão sob medida, combinando neuromarketing e análises estratégicas profundas. Cada plano é desenhado a partir de diagnósticos rigorosos, garantindo crescimento orgânico e otimizado, resultados mensuráveis e destaque duradouro. O foco é transformar potencial em liderança de mercado, com soluções personalizadas que poucos têm acesso." },
    { title: "SyraPulse", description: "O SyraPulse entrega marketing digital estratégico e de impacto, criando narrativas, conteúdos e campanhas que conectam, engajam e elevam cada marca no universo online. Atuamos com storytelling responsivo e estratégias de tráfego pago, sempre alinhados a diagnósticos minuciosos que definem público, tom e abordagem. Cada projeto é totalmente individualizado, garantindo presença digital exclusiva, percepção de valor elevada e resultados consistentes." },
    { title: "SyraNexus", description: "O SyraNexus desenvolve websites e aplicativos premium, onde tecnologia, design e neuromarketing se integram para criar experiências de alto impacto. Cada plataforma é planejada para oferecer engajamento, conversão e usabilidade excepcionais, refletindo a identidade e posicionamento exclusivos de cada cliente. Tudo é fruto de diagnósticos estratégicos e customização absoluta, garantindo soluções únicas e inimitáveis." },
    { title: "SyraFlow", description: "O SyraFlow capacita CEOs, artistas e comunicadores a maximizar liderança, influência e performance. Por meio de técnicas de neurocomunicação, hipnoterapia e assessoria estratégica, desenvolvemos treinamentos personalizados, baseados em diagnósticos individuais, para potencializar presença, narrativa e impacto. Cada programa é sofisticado, exclusivo e profundamente estratégico, garantindo resultados transformadores e duradouros." },
    { title: "SyraAura", description: "A SyraAura oferece assessoria de imprensa tradicional e estratégica, elevando marcas a posições de destaque e autoridade. Planejamos mídia, gerimos relacionamentos e produzimos conteúdo alinhado à identidade exclusiva de cada cliente. Cada ação é personalizada e meticulosa, garantindo visibilidade, reputação e percepção de alto valor, reforçando liderança e exclusividade no mercado." },
  ];

  return (
    <section id="servicos" className={styles.servicos}>
      <h2><b>Nossos Serviços</b></h2>
      <div className={styles.grid}>
        {services.map(service => (
          <ServiceCard key={service.title} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
};

export default Servicos;