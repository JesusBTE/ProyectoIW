import React, { useState, useEffect } from 'react';
import '../App.css'; // Importa el archivo CSS
import loma42 from '../Assets/loma_42.jpg';
import cafeTec from '../Assets/CafeteriaTec.jpg';
import kiosko from '../Assets/Kiosko.jpg';
const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      imgSrc: kiosko,
      title: 'Kisoko',
      text: 'El kiosco, situado a unos metros de la cafetería, ofrece una alternativa más accesible y rápida, aunque sin perder su toque de calidad. Con un ambiente relajado y algo más informal, es el lugar perfecto para quienes buscan algo ligero entre clases o para disfrutar de un pequeño descanso. Su estructura abierta y sencilla invita a los estudiantes a hacer una pausa rápida, mientras disfrutan de opciones deliciosas y económicas. El menú incluye bocados sabrosos y prácticos, como tacos y sándwiches, preparados al momento con ingredientes frescos. Aunque la oferta es más limitada en comparación con la cafetería, el kiosco destaca por su atmósfera acogedora y su eficiencia, convirtiéndolo en la opción preferida para quienes buscan algo rápido pero satisfactorio.',
    },
    {
      imgSrc: cafeTec,
      title: 'Cafeteria del Tecnologico',
      text: 'La cafetería dentro del Tecnológico de Tepic es un espacio moderno y elegante, diseñado para ofrecer una experiencia de alta calidad. Con un ambiente relajado y contemporáneo, los estudiantes y profesores pueden disfrutar de un servicio personalizado mientras saborean una variedad de opciones gastronómicas cuidadosamente preparadas. La decoración minimalista y los muebles cómodos crean un lugar ideal para estudiar, reunirse o simplemente disfrutar de un descanso. El menú incluye una selección gourmet que combina platillos clásicos con toques innovadores, destacándose por su frescura y presentación impecable. La atención al cliente es de primer nivel, lo que hace que la visita se convierta en un momento agradable y exclusivo dentro del campus.',
    },
    {
      imgSrc: loma42,
      title: 'Loma 42',
      text: 'Es en el parque «La Loma», el corazón verde de la ciudad de Tepic, donde nace el concepto Loma 42 Tepic, una terraza casual con una exquisita propuesta gastronómica atrevida mezclando sabores locales con tendencias globales.  Su mixología de autor con coctelería innovadora y su buena música hacen de este restaurante la nueva tendencia.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
  }, [cards.length]);

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img className="card-image" src={card.imgSrc} alt={card.title} />
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;