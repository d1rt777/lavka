import React, { useEffect } from 'react';

// Универсальная обертка модалки
const ModalOverlay = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay active" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        {children}
      </div>
    </div>
  );
};

// Модалка карточки товара
export const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <div className="modal-header">
        <h2>{product.name}</h2>
        <button className="close-modal" onClick={onClose}>×</button>
      </div>
      <div className="modal-body">
        <div className="modal-product">
          <div className="modal-product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="modal-product-info">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="modal-price">{product.price} ₽</div>
            <button className="modal-add" onClick={() => { onAddToCart(product); onClose(); }}>
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
};

// Модалка корзины
export const CartModal = ({ cart, isOpen, onClose, onRemoveFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Добавьте товары в корзину.");
      return;
    }
    alert("Здесь будет форма оформления заказа.");
  };

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <div className="modal-header">
        <h2>Корзина</h2>
        <button className="close-modal" onClick={onClose}>×</button>
      </div>
      <div className="modal-body">
        {cart.length === 0 ? (
          <div className="cart-empty">Корзина пока пустая</div>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.price} ₽</p>
                </div>
                <button className="remove-item" onClick={() => onRemoveFromCart(index)}>×</button>
              </div>
            ))}
          </div>
        )}

        <div className="cart-total">
          <span>Итого:</span>
          <span>{total} ₽</span>
        </div>

        <button className="checkout" onClick={handleCheckout}>
          Оформить заказ
        </button>
      </div>
    </ModalOverlay>
  );
};