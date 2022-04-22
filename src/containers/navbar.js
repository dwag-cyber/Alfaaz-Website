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
      <a href="" target="_blank">Home</a>
      <a href="" target="_blank">Gallery</a>
      <a href="" target="_blank">Teams</a>
      <a href="" target="_blank">Event Scheduled</a>
      <a href="" target="_blank">Our Sponsors</a>
    </div>
  </div>
  );
}

export default Navbar;