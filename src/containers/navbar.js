import React from 'react';
import './index.css';

function Navbar() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check"/>

    <div className="nav-header">
      <div className="nav-title">
      
      </div>
    </div>
  
    <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
    <div className="nav-links">
      <a href="#Home" >Home</a>
      <a href="#Gallery">Gallery</a>
      <a href="#Teams" >Teams</a>
      <a href="#Events">Events</a>
      <a href="" target="_blank">Our Sponsors</a>
    </div>
  </div>
  );
}

export default Navbar;