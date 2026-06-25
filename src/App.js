import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const menuData = {
  Starters: [
    { name: "Malai Paratha Roll", price: 400 },
    { name: "Bihari Paratha Roll", price: 400 },
    { name: "Kabab Paratha Roll", price: 400 },
    { name: "Damqeema Paratha Roll (Beef)", price: 450 },
    { name: "Beef boti Roll", price: 450 },
  ],

  "Chinese Food": [
    { name: "Creamy Pasta", price: 800 },
    { name: "Desi Twist Macaroni", price: 800 },
    { name: "Chicken Manchurian + Rice", price: 1000 },
    { name: "Singaporean Rice", price: 1000 },
    { name: "Chicken chowmein", price: 800 },
  ],

  "Coffee and Tea": [
    { name: "Hot Chocolate", price: 600 },
    { name: "Kashmiri Pink Tea", price: 600 },
    { name: "Green Tea", price: 400 },
    { name: "Choco Cloud", price: 800 },
    { name: "Cold Coffee", price: 800 },
    { name: "Mixed Tea", price: 400 },
    { name: "Coffee (Beaten)", price: 600 },
    { name: "Black Coffee", price: 500 },
    { name: "Steamed Milk", price: 500 },
  ],

  "New Years Special Deals": [
    { 
      name: "Friends Deal (2 Person)", 
      description: "2 Bihari Paratha Roll + 1 Chicken Khowsay",
      price: "Price on request" 
    },
    { 
      name: "Family Deal", 
      description: "2 Bihari Paratha Roll + 2 Malai Paratha Roll + 2 Chicken Khowsay",
      price: "Price on request" 
    },
  ],

  Khowsay: [
    { name: "Vegetable Khowsay", price: 800 },
    { name: "Chicken Khowsay", price: 800 },
    { name: "Beef Khowsay", price: 1000 },
    { name: "Bihari Khowsay", price: 800 },
    { name: "Dami Khowsay (Beef)", price: 1000 },
    { name: "Chicken Cream Khowsay", price: 1000 },
  ],

  "Boba World": [
    { name: "Mango Boba Bliss (Iced Tea)", price: 600 },
    { name: "Peach Boba Bliss (Iced Tea)", price: 600 },
    { name: "Lemon Boba Bliss (Iced Tea)", price: 600 },
    { name: "Strawberry Boba Bliss (Iced Tea)", price: 600 },
    { name: "Tea Pearl Bliss", price: 600 },
    { name: "Brew Pearl Latte", price: 800 },
  ],

  "Pakistani Cuisines": [
    { name: "Chicken Handi (Half)", price: 1800 },
    { name: "Chicken Handi (full)", price: 3500 },
    { name: "Chicken Achari Handi (Half)", price: 2000 },
    { name: "Chicken Achari Handi (full)", price: 3800 },
    { name: "Chicken Creamy Handi (Half)", price: 2200 },
    { name: "Chicken Creamy Handi (full)", price: 4400 },
    { name: "Chicken Cheesy Handi (Half)", price: 2500 },
    { name: "Chicken Cheesy Handi (full)", price: 4500 },
    { name: "Dam Ka Qeema (150gm Beef)", price: 1200 },
    { name: "Kabab Karahi (2 Kabab)", price: 800 },
  ],

  "Chaat Corner": [
    { name: "Chana Chaat (250 gram)", price: 800 },
    { name: "Khatty Aloo (250 gram)", price: 600 },
    { name: "Khatty Aloo (250 gram)", price: 800 },
    { name: "Dahi Phulki (250 gram)", price: 800 },
  ],

  Sides: [
    { name: "Curry (Extra)", price: 100 },
    { name: "Secret Chatni (Extra)", price: 80 },
    { name: "Paratha (Frozen)", price: 130 },
    { name: "Zeera Raita", price: 60 },
  ],

  Desserts: [
    { name: "Soji Halwa (250gm)", price: 400 },
    { name: "Gajar Halwa (250gm)", price: 800 },
    { name: "Besan Halwa (250gm)", price: 500 },
  ],

  Drinks: [
    { name: "Doodh Soda", price: 400 },
    { name: "Pakola Doodh Soda", price: 400 },
    { name: "Orange Doodh Soda", price: 400 },
    { name: "Simple Orange Soda", price: 300 },
    { name: "Simple Pakola Soda", price: 300 },
    { name: "Simple Lemon Soda", price: 300 },
  ]
};

export default function App() {
  const [activeTab, setActiveTab] = useState("Starters");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  // ✅ ADD THESE TWO LINES HERE
  const tabsRef = useRef(null);
  
  const scrollTabs = (direction) => {
    if (!tabsRef.current) return;
    
    const scrollAmount = 300; // You can change this value
    tabsRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    setTimeout(() => setVisible(true), 100);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <span className="navbar__logo">BKK <span className="navbar__logo-by">by</span> Erum</span>
        <div className="navbar__links">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a
            href="https://wa.me/923000000000?text=Hi%20I%20want%20to%20order%20from%20BKK%20by%20Erum"
            className="navbar__order-btn"
            target="_blank"
            rel="noreferrer"
          >
            Order Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" />
        <div className={`hero__content ${visible ? "hero__content--visible" : ""}`}>
          <p className="hero__eyebrow">Homemade · Karachi</p>
          <h1 className="hero__title">
            Food made with<br />
            <span className="hero__title-accent">real love.</span>
          </h1>
          <p className="hero__subtitle">
            Pakistani home cooking — the kind that takes all day<br />and tastes like it.
          </p>
          <div className="hero__ctas">
            <a href="#menu" className="btn btn--primary">See the Menu</a>
            <a
              href="https://wa.me/923000000000?text=Hi%20I%20want%20to%20order%20from%20BKK%20by%20Erum"
              className="btn btn--ghost"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Order
            </a>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span>scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* MENU */}
      <section className="menu" id="menu">
        <div className="menu__header">
          <p className="section__eyebrow">What we make</p>
          <h2 className="section__title">Our Menu</h2>
        </div>

        <div className="menu__tabs-wrapper">
          {/* Left Arrow Button */}
          <button
            className="menu__scroll-btn menu__scroll-btn--left"
            onClick={() => scrollTabs('left')}
            aria-label="Scroll menu left"
          >
            ←
          </button>

          {/* Scrollable Tabs */}
          <div className="menu__tabs" ref={tabsRef}>
            {Object.keys(menuData).map((cat) => (
              <button
                key={cat}
                className={`menu__tab ${activeTab === cat ? "menu__tab--active" : ""}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            className="menu__scroll-btn menu__scroll-btn--right"
            onClick={() => scrollTabs('right')}
            aria-label="Scroll menu right"
          >
            →
          </button>
        </div>

        <div className="menu__list">
          {menuData[activeTab].map((item, i) => (
            <div className="menu__item" key={i} style={{ animationDelay: `${i * 60}ms` }}>
              <span className="menu__item-name">{item.name}</span>
              <span className="menu__item-dots" />
              <span className="menu__item-price">Rs. {item.price}</span>
            </div>
          ))}
        </div>

        <div className="menu__foodpanda">
          <p>Also available on</p>
          <a
            href="https://www.foodpanda.pk"
            target="_blank"
            rel="noreferrer"
            className="btn btn--outline"
          >
            🐼 Order on Foodpanda
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about__inner">
          <div className="about__text">
            <p className="section__eyebrow">The story</p>
            <h2 className="section__title">Made from scratch,<br />every single time.</h2>
            <p className="about__body">
              BKK by Erum started as a labour of love — a home kitchen in Karachi
              where every dish is cooked the slow way.
              Just Authentic recipes passed down and perfected over years.
            </p>
            <p className="about__body">
              Whether it's a steaming bowl of Khowsay or a perfectly rolled Bihari
              paratha, every order leaves this kitchen with the same care as if it
              were made for family.
            </p>
          </div>
          <div className="about__badge">
            <div className="about__badge-inner">
              <span>Home</span>
              <span>Cooked</span>
              <span className="about__badge-accent">Daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="cta">
        <h2 className="cta__title">Ready to order?</h2>
        <p className="cta__sub">Drop us a message and we'll take it from there.</p>
        <a
          href="https://wa.me/923000000000?text=Hi%20I%20want%20to%20order%20from%20BKK%20by%20Erum"
          className="btn btn--primary btn--large"
          target="_blank"
          rel="noreferrer"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Chat on WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span className="footer__brand">BKK by Erum</span>
        <span className="footer__copy">© 2025 · Karachi, Pakistan</span>
      </footer>
    </div>
  );
}