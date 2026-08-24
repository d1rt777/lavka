// import React, { useState } from 'react';
// import { PRODUCTS } from './data/Products';
// import { Header } from './components/Header';
// import { Catalog } from './components/Catalog';
// import { ReviewsSection } from './components/ReviewsSection';
// import { ProductModal, CartModal } from './components/Modals';
// import { Hero, About, Contacts, Footer } from './components/Sections';


// export default function App() {
//   const [cart, setCart] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [activeModal, setActiveModal] = useState(null); // 'cart' | 'product' | null

//   // Работа с корзиной
//   const handleAddToCart = (product) => {
//     setCart(prev => [...prev, product]);
//   };

//   const handleRemoveFromCart = (index) => {
//     setCart(prev => prev.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="app">
//       <Header
//         cartCount={cart.length}
//         onOpenCart={() => setActiveModal('cart')}
//       />

//       <Hero />

//       <Catalog
//         products={PRODUCTS}
//         onOpenProduct={(prod) => {
//           setSelectedProduct(prod);
//           setActiveModal('product');
//         }}
//         onAddToCart={handleAddToCart}
//       />

//       <About />

//       <ReviewsSection />

//       <Contacts />

//       <Footer />

//       {/* Модальное окно просмотра товара */}
//       <ProductModal
//         product={selectedProduct}
//         isOpen={activeModal === 'product'}
//         onClose={() => setActiveModal(null)}
//         onAddToCart={handleAddToCart}
//       />

//       {/* Модальное окно корзины */}
//       <CartModal
//         cart={cart}
//         isOpen={activeModal === 'cart'}
//         onClose={() => setActiveModal(null)}
//         onRemoveFromCart={handleRemoveFromCart}
//       />
//     </div>
//   );
// }