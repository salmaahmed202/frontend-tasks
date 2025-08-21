import React from 'react'
import './Hero.css';
import heroImg from '../../Assets/hero.png';
export default function Hero() {
  return (
    <section className="hero" >
      <h4 style={{ fontFamily: "Lato", fontSize: "60px" }}>
        Canal Sreet Market is a <br />
        carefully curated retail market,
        <br />
        food hall & community space
        <br />
        open year-round at 265 Canal
        <br />
        Street
      </h4>
      <img src={heroImg} alt="Hero" />
    </section>
  )
}
