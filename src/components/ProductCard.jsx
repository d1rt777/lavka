import React from 'react';

export const ProductCard = ({ product, onOpen, onAddToCart }) => {

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "RUB",
      "availability": "https://schema.org/InStock",
      "url": `${window.location.origin}/lavka/catalog/${product.categorySlug}/${product.slug}`
    }
  };

  return (
    <article className="product"
      itemScope
      itemType="https://schema.org/Product"
    >
      <div className="product-image">
        <img src={product.image} alt={product.name} itemProp="image" />
      </div>

      <div className="product-info">
        <div className="product-category" itemProp="category">{product.category}</div>
        <h3 itemProp="name">{product.name}</h3>
        <p className="product-description" itemProp="description">{product.description}</p>

        <div className="product-bottom"
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <div className="price">
            <meta
              itemProp="priceCurrency"
              content="RUB"
            />
            {product.price} ₽ <span>/ шт.</span>
          </div>

          <div className="product-actions">
            <a
              className="details-button"
              href={`/lavka/catalog/${product.categorySlug}/${product.slug}`}
              itemProp="url"
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