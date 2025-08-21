import React from 'react'
import './Events.css';
export default function Events() {
  return (
    <>
    <section className="events-section">
      <div className="side-text">活動</div>
      <h1 className="title">
        Market <br /> Events
      </h1>
      <div className="side-text">活動</div>
    </section>

    <div className="divider"></div>

    <div className="events-list">
      <div className="event">
        <p className="date">02/07</p>
        <p className="desc">
          New Balance x Paperboy Paris by Greenhouse @ Canal Street Market
        </p>
      </div>
      <div className="event">
        <p className="date">12/11</p>
        <p className="desc">Hack City 12/11</p>
      </div>
      <div className="event">
        <p className="date">07/27</p>
        <p className="desc">Taiwanese Wave</p>
      </div>
    </div>

    <div className="divider"></div>

    <div className="button-container">
      <button className="see-all">see all</button>
    </div>

    <div className="divider"></div>
  </>
  )
}
