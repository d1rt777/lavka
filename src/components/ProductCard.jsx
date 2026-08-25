import React from 'react';

export const ProductCard = ({ product, onOpen, onAddToCart }) => {
  return (
    <article className="product">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-bottom">
          <div className="price">
            {product.price} ₽ <span>/ шт.</span>
          </div>

          <div className="product-actions">
            <a
              className="details-button"
              href={`/lavka/catalog/${product.categorySlug}/${product.slug}`}
            >
              Подробнее
            </a>
            <button className="add-button" onClick={() => onAddToCart(product)}>
              В корзину
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};