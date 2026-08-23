import React from 'react';

export const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <small>Натуральные продукты</small>
      <h1>Фермерская<br />лавка</h1>
      <p>Настоящий вкус детства. Домашние продукты от местных фермеров прямо к вашему столу.</p>
      <a href="#catalog" className="hero-button">Смотреть товары</a>
    </div>
  </section>
);

export const About = () => (
  <section className="about" id="about">
    <div className="container">
      <div className="about-grid">
        <div className="about-image"></div>
        <div className="about-content">
          <span>Немного о нас</span>
          <h2>Всё как в детстве</h2>
          <p>Мы собираем в одном месте продукты, которые напоминают настоящий домашний стол.</p>
          <p>Молоко, сыр, колбаса, мясо и другие продукты от небольших фермерских хозяйств.</p>
          <div className="advantages">
            <div className="advantage"><div className="advantage-icon">✓</div><span>Натуральные продукты</span></div>
            <div className="advantage"><div className="advantage-icon">✓</div><span>Проверенные фермеры</span></div>
            <div className="advantage"><div className="advantage-icon">✓</div><span>Свежие поставки</span></div>
            <div className="advantage"><div className="advantage-icon">✓</div><span>Честные цены</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Contacts = () => (
  <section className="contacts" id="contacts">
    <div className="container">
      <div className="contacts-grid">
        <div className="contact-photo">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=50.806799%2C61.669707&mode=whatshere&whatshere%5Bpoint%5D=50.803661%2C61.671597&whatshere%5Bzoom%5D=15.84&z=15"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            title="Map"
          />
        </div>
        <div className="contact-content">
          <h2>Связь с нами</h2>
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <strong>Адрес</strong>
              <p>г. Сыктывкар, ул. Примерная, 12</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <strong>Телефон</strong>
              <p>+7 (900) 000-00-00</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">⏱</div>
            <div>
              <strong>Режим работы</strong>
              <p>Ежедневно: 09:00 — 21:00</p>
            </div>
          </div>
          <div className="socials">
            <a href="#" className="social vk">VK</a>
            <a href="#" className="social max">WA</a>
            <a href="#" className="social telegram">TG</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer>
    <div className="footer-inner">
      <div className="footer-logo">Фермерская лавка</div>
      <div className="footer-links">
        <a href="#catalog">Каталог</a>
        <a href="#about">О нас</a>
        <a href="#reviews">Отзывы</a>
        <a href="#contacts">Контакты</a>
      </div>
    </div>
  </footer>
);