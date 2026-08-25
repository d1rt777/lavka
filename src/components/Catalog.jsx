import React, { useState } from 'react';
import { ProductCard } from './ProductCard';

export const Catalog = ({ products, onOpenProduct, onAddToCart }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, products.length));
  };

  return (
    <section id="catalog">
      <div className="container">
        <div className="section-title">
          <span>Наш ассортимент</span>
          <h2>Каталог</h2>
          <p>Отборные продукты от фермеров, которым мы доверяем.</p>
        </div>

        <div className="products">
          {products.slice(0, visibleCount).map(product => (
            <ProductCard
              key={product.id}
              product={product}
              // onOpen={onOpenProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {visibleCount < products.length && (
          <button className="show-more" onClick={handleShowMore}>
            Показать ещё
          </button>
        )}
      </div>
    </section>
  );
};