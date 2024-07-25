import React, { useState } from 'react';
import '../static/Photos.css';

const Photos = () => {
  const [photos, setPhotos] = useState([
    'https://placekitten.com/200/300',
    'https://placekitten.com/300/300',
    'https://placekitten.com/400/300'
  ]);

  return (
    <div className="photos">
      <h2>Photos Component</h2>
      <div className="photos-grid">
        {photos.map((url, index) => (
          <img key={index} src={url} alt={`Photo ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Photos;
