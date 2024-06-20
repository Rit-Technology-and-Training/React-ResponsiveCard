// src/ResponsiveVideo.jsx
import React from 'react';
import './ResponsiveVideo.css';

const ResponsiveVideo = ({ src }) => {
  return (
    <div className="video-container">
      <iframe
        className="responsive-iframe"
        src={src}
        title="Responsive Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    );
};

export default ResponsiveVideo;
