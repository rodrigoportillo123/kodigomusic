// src/components/CircularImage.tsx
import React from 'react';
import './CircularImage.css';

type CircularImageProps = {
  src: string;
  alt: string;
};

const CircularImage: React.FC<CircularImageProps> = ({ src, alt }) => {
  return (
    <div className="circular-image">
      <img src={src} alt={alt} />
    </div>
  );
};

export default CircularImage;
