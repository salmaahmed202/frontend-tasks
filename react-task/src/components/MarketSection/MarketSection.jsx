import React from 'react'
import foodImg from'../../Assets/food-hall.jpg';
import retailImg from '../../Assets/Retail-Shop1.jpg';
import communityImg from '../../Assets/community.jpg';
import './MarketSection.css';
export default function MarketSection() {
  return (
    <section className="section" data-aos="fade-up">
      <h2 style={{ fontSize: "60px", fontFamily: "Lato" }}>
        A New Kind of Market
      </h2>
      <div className="cards">
        <div className="card" data-aos="fade-up" data-aos-delay="100">
          <img src={foodImg} alt="Food Hall" />
          <h3>Food Hall</h3>
          <p>
            Merging retail, food, art, and culture, Canal Street Market highlights
            top retail and design concepts, restaurants, and up-and-coming
            players in the downtown New York City community.
          </p>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="200">
          <img src={retailImg} alt="Retail" />
          <h3>Retail Shops</h3>
          <p>
            Retail Market (AFRAME Coffee) Hours: <br />
            Mon-Fri: 8:00AM - 3:00PM <br />
            Sat & Sun: 9:00AM - 3:00PM
          </p>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="300">
          <img src={communityImg} alt="Community" />
          <h3>Community</h3>
          <p>
            Food Hall Hours: <br />
            Mon-Sat: 11:00AM - 6:00PM <br />
            Sun: 11:00AM - 6:00PM
          </p>
        </div>
      </div>
    </section>
  )
}
