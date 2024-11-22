import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link dari React Router
import '../styles/homeStyles.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { title: 'Landing Page 1', description: 'Welcome to our website!', backgroundImage: 'slide1.jpg' },
    { title: 'Landing Page 2', description: 'Explore our services!', backgroundImage: 'slide2.jpg' },
    { title: 'Landing Page 3', description: 'Join us today!', backgroundImage: 'slide3.jpg' },
    { title: 'Landing Page 4', description: 'Contact us for more information!', backgroundImage: 'slide4.jpg' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="home-page">
      {/* Navbar */}
      <header className="navbar">
        <Link to="/" className="navbar-logo">Logo</Link>
        <div className="navbar-search">
          <input type="text" placeholder="Search" />
        </div>
        <ul className="nav-links">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </header>

      {/* Empty Full-Screen Section Below Navbar */}
      <section className="empty-section"></section>

      {/* Carousel Section */}
      <section className="landing-page">
        <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="slide" style={{ backgroundImage: `url(${slide.backgroundImage})` }}>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          ))}
        </div>
        <div className="pagination">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* Booking Button */}
      <Link to="/booking" className="booking-button">Booking Now</Link>

      {/* Category Section */}
      <section className="category-section">
        <h2>KATEGORI</h2>
        <div className="category-grid">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="category-item">
              <div className="category-icon">[IMG]</div>
              <p>Category {index + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Best Around Section */}
      <section className="best-around">
        <h2>TERBAIK DISEKITAR ANDA</h2>
        <div className="promo-input">
          <input type="text" placeholder="Masukkan Kode Promo..." />
        </div>
        <div className="filter-options">
          {Array.from({ length: 5 }).map((_, index) => (
            <label key={index}>
              <input type="radio" name="filter" /> Urutkan {index + 1}
            </label>
          ))}
        </div>
        <div className="best-item-list">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="best-item">
              <div className="best-item-image">[IMG]</div>
              <p className="best-item-text">Item {index + 1} description goes here</p>
              <button className="btn">Button</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
