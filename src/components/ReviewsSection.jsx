import React, { useState } from 'react';

const INITIAL_REVIEWS = [
  {
    name: "Александра",
    date: "12.08.2026",
    rating: 5,
    text: "Очень вкусные продукты. Особенно понравился сыр — действительно чувствуется, что он фермерский. Теперь регулярно покупаем здесь."
  },
  {
    name: "Дмитрий",
    date: "05.08.2026",
    rating: 5,
    text: "Хороший выбор и приятные цены. Колбаса вообще огонь."
  }
];

export const ReviewsSection = () => {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Состояние формы
  const [name, setName] = useState('');
  const [rating, setRating] = useState('5');
  const [text, setText] = useState('');

  const showNext = () => {
    setCurrentIndex(prev => (prev + 1) % reviews.length);
  };

  const showPrev = () => {
    setCurrentIndex(prev => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name,
      date: new Date().toLocaleDateString("ru-RU"),
      rating: Number(rating),
      text
    };

    setReviews([newReview, ...reviews]);
    setCurrentIndex(0);
    setName('');
    setText('');
    setRating('5');
    alert(`Спасибо, ${name}! Ваш отзыв опубликован.`);
  };

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="section-title">
          <span>Нам доверяют</span>
          <h2>Отзывы</h2>
        </div>

        <div className="reviews-grid">
          {/* Слайдер */}
          <div className="reviews-slider-wrapper">
            <div className="reviews-slider">
              {reviews.map((rev, idx) => (
                <div
                  key={idx}
                  className={`review-card ${idx === currentIndex ? 'active' : ''}`}
                >
                  <div className="review-user">
                    <div className="avatar">{rev.name.charAt(0).toUpperCase()}</div>
                    <div>
                      <h4>{rev.name}</h4>
                      <div className="review-date">{rev.date}</div>
                    </div>
                  </div>
                  <div className="stars">
                    {"★".repeat(rev.rating) + "☆".repeat(5 - rev.rating)}
                  </div>
                  <p>{rev.text}</p>
                </div>
              ))}
            </div>

            <div className="slider-controls">
              <button className="slider-btn" onClick={showPrev} aria-label="Предыдущий отзыв">←</button>
              <div className="slider-dots">
                {reviews.map((_, idx) => (
                  <span
                    key={idx}
                    className={`dot ${idx === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                  />
                ))}
              </div>
              <button className="slider-btn" onClick={showNext} aria-label="Следующий отзыв">→</button>
            </div>
          </div>

          {/* Форма */}
          <form className="review-form" onSubmit={handleSubmit}>
            <h3>Оставьте отзыв</h3>

            <div className="form-group">
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="rating-label">Ваша оценка:</label>
              <div className="star-rating">
                {[5, 4, 3, 2, 1].map(num => (
                  <React.Fragment key={num}>
                    <input
                      type="radio"
                      id={`star${num}`}
                      name="rating"
                      value={num}
                      checked={Number(rating) === num}
                      onChange={e => setRating(e.target.value)}
                    />
                    <label htmlFor={`star${num}`}>★</label>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="form-group">
              <textarea
                placeholder="Текст отзыва..."
                value={text}
                onChange={e => setText(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="review-submit">Отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
};