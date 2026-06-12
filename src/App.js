import React, { useState, useEffect } from "react";
import "./App.css";

const menuData = {
  Starters: [
    { name: "Malai Paratha Roll", price: 400 },
    { name: "Bihari Paratha Roll", price: 380 },
    { name: "Kabab Paratha Roll", price: 380 },
    { name: "Dam Qeema Paratha Roll (Beef)", price: 400 },
  ],
  Khowsay: [
    { name: "Vegetable Khowsay", price: 699 },
    { name: "Chicken Khowsay", price: 699 },
    { name: "Chicken Kabab Khowsay", price: 699 },
    { name: "Bihari Khowsay (Chicken)", price: 699 },
  ],
  Mains: [
    { name: "Dam Qeema (Beef)", price: 850 },
    { name: "Chicken Karahi", price: 950 },
    { name: "Mutton Karahi", price: 1299 },
    { name: "Beef Nihari", price: 899 },
  ],
  Desserts: [
    { name: "Kheer", price: 250 },
    { name: "Gajar ka Halwa", price: 280 },
    { name: "Shahi Tukray", price: 320 },
  ],
};

export default function App() {
  const [activeTab, setActiveTab] = useState("Starters");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

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

        <div className="menu__tabs">
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
              where every dish is cooked the slow way. No shortcuts, no frozen bases.
              Just real Pakistani recipes passed down and perfected over years.
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