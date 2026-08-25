import React, { useMemo, useState } from 'react';

import { PRODUCTS } from '../../data/Products';
import { ProductCard } from '../../components/ProductCard';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Sections';

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);

  const categories = [
    {
      slug: 'all',
      name: 'Все товары'
    },
    ...Array.from(
      new Map(
        PRODUCTS.map(product => [
          product.categorySlug,
          {
            slug: product.categorySlug,
            name: product.category
          }
        ])
      ).values()
    )
  ];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return PRODUCTS;
    }

    return PRODUCTS.filter(
      product => product.categorySlug === selectedCategory
    );
  }, [selectedCategory]);

  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <div className="app">

      <Header
        cartCount={cart.length}
        onOpenCart={() => {
          console.log('Открыть корзину');
        }}
      />

      <main className="catalog-page">
        <div className="container">

          <div className="section-title catalog-page-title">
            <span>Наш ассортимент</span>

            <h1>Каталог</h1>

            <p>
              Отборные продукты от фермеров, которым мы доверяем.
            </p>
          </div>

          <div className="catalog-filters">
            {categories.map(category => (
              <button
                key={category.slug}
                className={
                  selectedCategory === category.slug
                    ? 'catalog-filter active'
                    : 'catalog-filter'
                }
                onClick={() => setSelectedCategory(category.slug)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="products">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="catalog-empty">
              <h2>Товаров пока нет</h2>

              <p>
                В этой категории пока нет доступных товаров.
              </p>
            </div>
          )}

        </div>
      </main>

      <Footer />

    </div>
  );
}