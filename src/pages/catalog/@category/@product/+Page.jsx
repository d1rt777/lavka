import React from 'react';
import { usePageContext } from 'vike-react/usePageContext';
import { PRODUCTS } from '../../../../data/Products';

export default function Page() {
  const pageContext = usePageContext();

  const { category, product: productSlug } = pageContext.routeParams;

  const product = PRODUCTS.find(
    item =>
      item.categorySlug === category &&
      item.slug === productSlug
  );

  if (!product) {
    return (
      <main className="product-page">
        <div className="container">
          <div className="product-not-found">
            <span>Ошибка</span>
            <h1>Товар не найден</h1>
            <p>
              К сожалению, такого товара не существует.
            </p>

            <a href="/#catalog" className="product-back-button">
              Вернуться в каталог
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="product-page">

      <div className="container">

        <div className="product-breadcrumbs">
          <a href="/">Главная</a>
          <span> / </span>
          <a href="/#catalog">Каталог</a>
          <span> / </span>
          <span>{product.category}</span>
          <span> / </span>
          <strong>{product.name}</strong>
        </div>

        <div className="product-detail">

          <div className="product-detail-image">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-detail-info">

            <div className="product-detail-category">
              {product.category}
            </div>

            <h1>{product.name}</h1>

            <p className="product-detail-description">
              {product.description}
            </p>

            <div className="product-detail-divider" />

            <div className="product-detail-price">
              {product.price} ₽
              <span>/ шт.</span>
            </div>

            <button
              className="product-detail-cart"
              onClick={() => {
                console.log('Добавить в корзину:', product);
              }}
            >
              Добавить в корзину
            </button>

            <a
              href="/#catalog"
              className="product-detail-back"
            >
              ← Вернуться в каталог
            </a>

          </div>

        </div>

      </div>

    </main>
  );
}