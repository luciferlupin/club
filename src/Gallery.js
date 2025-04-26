import React from 'react';
import './Gallery.css';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    alt: 'Packed dance floor',
  },
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    alt: 'DJ performing',
  },
  {
    src: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302c?auto=format&fit=crop&w=600&q=80',
    alt: 'Crowd cheering',
  },
  {
    src: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=600&q=80',
    alt: 'Club lighting',
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    alt: 'VIP area',
  },
  {
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    alt: 'Party people',
  },
];

function Gallery() {
  return (
    <div className="gallery-page">
      <h2>Event Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((img, idx) => (
          <div className="gallery-item" key={idx}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
