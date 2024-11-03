// src/pages/Explore.tsx
import React from 'react';
import CircularImage from '../components/CircularImage';

const Explore: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <CircularImage src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSqoSEuV0lmNrEVLwJ6q75DaOWQjorN0b2G_BLJr4OScCX0YSZ" alt="Álbum 1" />
      <CircularImage src="https://res.cloudinary.com/dzwfsvec8/image/upload/v1721694448/samples/man-portrait.jpg" alt="Álbum 2" />
      <CircularImage src="https://res.cloudinary.com/dzwfsvec8/image/upload/v1721694439/samples/people/boy-snow-hoodie.jpg" alt="Álbum 3" />
      <CircularImage src="https://static.independentespanol.com/2022/05/04/14/newFile-7.jpg" alt="Álbum 3" />
      {/* Agrega más imágenes según lo necesites */}
    </div>
  );
};

export default Explore;
