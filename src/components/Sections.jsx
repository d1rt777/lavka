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
                        <div className="contact-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg></div>
                        <div>
                            <strong>Адрес</strong>
                            <p>г. Сыктывкар, ул. Примерная, 12</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg></div>
                        <div>
                            <strong>Телефон</strong>
                            <p>+7 (900) 000-00-00</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-stopwatch" viewBox="0 0 16 16">
                            <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
                            <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
                        </svg></div>
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