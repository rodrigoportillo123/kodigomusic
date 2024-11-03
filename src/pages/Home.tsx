// src/pages/Home.tsx
import React from 'react';
import Card from '../components/Card';
import './Home.css'; // Importa los estilos para el home

const Home: React.FC = () => {
  const cardsData = [
    {
      title: "Rap",
      image: "https://res.cloudinary.com/dzwfsvec8/image/upload/v1721694448/samples/man-portrait.jpg", // Primera imagen
      description: "Para sentirte motivado"
    },
    {
      title: "Musica para programar",
      image: "https://res.cloudinary.com/dzwfsvec8/image/upload/v1721694448/samples/coffee.jpg", // Segunda imagen
      description: "Musica para ser el mejor programando"
    },
    {
        title: "Jazz",
        image: "https://res.cloudinary.com/dzwfsvec8/image/upload/v1721694439/samples/people/jazz.jpg", // URL de la imagen
        description: "Relajate pasa un momento en familia, acompañado de la mejor musica"
      },
  ];

  return (
    <div className="home">
      <h1>Bienvenido a Kodigo Music</h1>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
            size="medium" // Tamaño opcional
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
