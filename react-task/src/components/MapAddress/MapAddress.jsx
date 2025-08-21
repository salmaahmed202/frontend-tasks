import React from 'react'
import mapImg from '../../Assets/map.png';
import './MapAddress.css';
export default function MapAddress() {
  return (
    <section className="section map-address" data-aos="fade-up">
       <a 
        href="https://www.google.com/maps/place/265+Canal+St,+New+York,+NY" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img src={mapImg} alt="Map" />
      </a>
      <div className="address">265 Canal Street, New York, NY</div>
    </section>
  )
}
