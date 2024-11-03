// src/components/Card.tsx
import React from 'react';
import './Card.css'; // Importar estilos para el card

interface CardProps {
  title: string;
  image: string;
  description: string;
  size?: 'small' | 'medium' | 'large'; // Tamaño opcional
}

const Card: React.FC<CardProps> = ({ title, image, description, size = 'medium' }) => {
  return (
    <div className={`card ${size}`}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
