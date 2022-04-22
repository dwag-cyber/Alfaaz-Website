import { PinDropSharp } from '@material-ui/icons';
import React from 'react';
import './index.css'
import SimpleImageSlider from "react-simple-image-slider";
import image1 from './Images/pp1.jpeg'
import image2 from './Images/pp2.jpeg'
import image3 from './Images/pp3.jpeg'
import image4 from './Images/pp4.jpeg'
import image5 from './Images/pp5.jpeg'
import image6 from './Images/pp6.jpeg'
import image7 from './Images/pp7.jpeg'

const images = [
    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4 },
    { url: image5 },
    { url: image6 },
    { url: image7 }
  ];
  

function Gallery() {
  return (
    <div class="gallery-main">
      <SimpleImageSlider
        width="100%"
        height={804}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default Gallery;