import React from 'react'
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <div className="social-box">
        <a className='email' href="https://gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-pencil-alt"></i>
          Email us
          </a>
        </div>
        <div className="social-box">
        <a className='facebook' href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook-f"></i>
    Follow us on Facebook
  </a>
        </div>
       
        <div className="social-box">
          <a className='insta' href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
          <i className="fab fa-instagram"></i>
          Follow us on Instagram
          </a>
        </div>
      </div>

      <div className="newsletter">
        <div className="newsletter-text">
          Stay up to date <br /> with our newsletter
        </div>
        <form className="newsletter-form">
          <input type="email" placeholder="Email" />
          <button type="submit">→</button>
        </form>
      </div>

      <div className="footer-bottom">
        <div>Copyright Canal Street Market 2019</div>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Vendor Login</a>
          <a href="#">Site by Zero</a>
        </div>
      </div>
    </footer>
  )
}
