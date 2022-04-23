import React from 'react';
import './index.css'
import randomvideo from './Images/Untitled.mp4'

function Video() {
  return (
    <div className="row-hero" id="Home" >
    <video className="video" autoPlay playsInline muted loop>
    
      <source src={randomvideo} type="video/mp4"/>
    </video>
	
</div>
  );
}

export default Video;