import { t as __exportAll } from "../chunks/chunk-D7D4PA-g.js";
/* empty css                       */
/* empty css                       */
import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import React, { useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import import5 from "vike-react/__internal/integration/Loading";
//#region src/data/Products.js
var PRODUCTS = [
	{
		id: 1,
		name: "Домашний сыр",
		category: "Молочная продукция",
		price: 450,
		description: "Натуральный фермерский сыр из свежего молока.",
		image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=800&q=80"
	},
	{
		id: 2,
		name: "Фермерская колбаса",
		category: "Мясная продукция",
		price: 690,
		description: "Домашняя колбаса из отборного мяса.",
		image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
	},
	{
		id: 3,
		name: "Домашнее молоко",
		category: "Молочная продукция",
		price: 120,
		description: "Свежайшее фермерское молоко.",
		image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=800&q=80"
	},
	{
		id: 4,
		name: "Сливочное масло",
		category: "Молочная продукция",
		price: 280,
		description: "Натуральное сливочное масло.",
		image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80"
	},
	{
		id: 5,
		name: "Фермерский творог",
		category: "Молочная продукция",
		price: 230,
		description: "Мягкий творог из натурального молока.",
		image: "https://images.unsplash.com/photo-1634487359989-3e90c9432133?auto=format&fit=crop&w=800&q=80"
	},
	{
		id: 6,
		name: "Домашняя сметана",
		category: "Молочная продукция",
		price: 190,
		description: "Густая натуральная сметана.",
		image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80"
	},
	{
		id: 7,
		name: "Фермерские яйца",
		category: "Фермерские продукты",
		price: 150,
		description: "Свежие деревенские яйца.",
		image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=80"
	},
	{
		id: 8,
		name: "Домашняя ветчина",
		category: "Мясная продукция",
		price: 760,
		description: "Нежная фермерская ветчина.",
		image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80"
	},
	{
		id: 9,
		name: "Мёд",
		category: "Фермерские продукты",
		price: 550,
		description: "Натуральный цветочный мёд.",
		image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80"
	}
];
//#endregion
//#region src/components/Header.jsx
var Header = ({ cartCount, onOpenCart }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const toggleMenu = () => {
		setIsMenuOpen((prev) => {
			const nextState = !prev;
			document.body.style.overflow = nextState ? "hidden" : "";
			return nextState;
		});
	};
	const closeMenu = () => {
		setIsMenuOpen(false);
		document.body.style.overflow = "";
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("header", {
		className: `${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "header-inner",
			children: [
				/* @__PURE__ */ jsx("a", {
					href: "#",
					className: "logo",
					children: "Фермерская лавка"
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "nav-menu",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "#catalog",
							onClick: closeMenu,
							children: "Каталог"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#about",
							onClick: closeMenu,
							children: "О нас"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#reviews",
							onClick: closeMenu,
							children: "Отзывы"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#contacts",
							onClick: closeMenu,
							children: "Контакты"
						})
					]
				}),
				/* @__PURE__ */ jsxs("button", {
					className: "cart-button",
					onClick: onOpenCart,
					children: [/* @__PURE__ */ jsx("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "24",
						height: "24",
						fill: "currentColor",
						className: "bi bi-cart",
						viewBox: "0 0 16 16",
						children: /* @__PURE__ */ jsx("path", { d: "M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" })
					}), /* @__PURE__ */ jsx("span", {
						className: "cart-count",
						id: "cartCount",
						children: cartCount
					})]
				}),
				/* @__PURE__ */ jsxs("button", {
					className: "burger-button",
					"aria-label": "Открыть меню",
					onClick: toggleMenu,
					children: [
						/* @__PURE__ */ jsx("span", {}),
						/* @__PURE__ */ jsx("span", {}),
						/* @__PURE__ */ jsx("span", {})
					]
				})
			]
		})
	}), /* @__PURE__ */ jsx("div", {
		className: `menu-overlay ${isMenuOpen ? "active" : ""}`,
		onClick: closeMenu
	})] });
};
//#endregion
//#region src/components/ProductCard.jsx
var ProductCard = ({ product, onOpen, onAddToCart }) => {
	return /* @__PURE__ */ jsxs("article", {
		className: "product",
		children: [/* @__PURE__ */ jsx("div", {
			className: "product-image",
			children: /* @__PURE__ */ jsx("img", {
				src: product.image,
				alt: product.name
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "product-info",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "product-category",
					children: product.category
				}),
				/* @__PURE__ */ jsx("h3", { children: product.name }),
				/* @__PURE__ */ jsx("p", {
					className: "product-description",
					children: product.description
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "product-bottom",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "price",
						children: [
							product.price,
							" ₽ ",
							/* @__PURE__ */ jsx("span", { children: "/ шт." })
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "product-actions",
						children: [/* @__PURE__ */ jsx("button", {
							className: "details-button",
							onClick: () => onOpen(product),
							children: "Подробнее"
						}), /* @__PURE__ */ jsx("button", {
							className: "add-button",
							onClick: () => onAddToCart(product),
							children: "В корзину"
						})]
					})]
				})
			]
		})]
	});
};
//#endregion
//#region src/components/Catalog.jsx
var Catalog = ({ products, onOpenProduct, onAddToCart }) => {
	const [visibleCount, setVisibleCount] = useState(6);
	const handleShowMore = () => {
		setVisibleCount((prev) => Math.min(prev + 3, products.length));
	};
	return /* @__PURE__ */ jsx("section", {
		id: "catalog",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "section-title",
					children: [
						/* @__PURE__ */ jsx("span", { children: "Наш ассортимент" }),
						/* @__PURE__ */ jsx("h2", { children: "Каталог" }),
						/* @__PURE__ */ jsx("p", { children: "Отборные продукты от фермеров, которым мы доверяем." })
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "products",
					children: products.slice(0, visibleCount).map((product) => /* @__PURE__ */ jsx(ProductCard, {
						product,
						onOpen: onOpenProduct,
						onAddToCart
					}, product.id))
				}),
				visibleCount < products.length && /* @__PURE__ */ jsx("button", {
					className: "show-more",
					onClick: handleShowMore,
					children: "Показать ещё"
				})
			]
		})
	});
};
//#endregion
//#region src/components/ReviewsSection.jsx
var INITIAL_REVIEWS = [{
	name: "Александра",
	date: "12.08.2026",
	rating: 5,
	text: "Очень вкусные продукты. Особенно понравился сыр — действительно чувствуется, что он фермерский. Теперь регулярно покупаем здесь."
}, {
	name: "Дмитрий",
	date: "05.08.2026",
	rating: 5,
	text: "Хороший выбор и приятные цены. Колбаса вообще огонь."
}];
var ReviewsSection = () => {
	const [reviews, setReviews] = useState(INITIAL_REVIEWS);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [name, setName] = useState("");
	const [rating, setRating] = useState("5");
	const [text, setText] = useState("");
	const showNext = () => {
		setCurrentIndex((prev) => (prev + 1) % reviews.length);
	};
	const showPrev = () => {
		setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const newReview = {
			name,
			date: (/* @__PURE__ */ new Date()).toLocaleDateString("ru-RU"),
			rating: Number(rating),
			text
		};
		setReviews([newReview, ...reviews]);
		setCurrentIndex(0);
		setName("");
		setText("");
		setRating("5");
		alert(`Спасибо, ${name}! Ваш отзыв опубликован.`);
	};
	return /* @__PURE__ */ jsx("section", {
		className: "reviews",
		id: "reviews",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "section-title",
				children: [/* @__PURE__ */ jsx("span", { children: "Нам доверяют" }), /* @__PURE__ */ jsx("h2", { children: "Отзывы" })]
			}), /* @__PURE__ */ jsxs("div", {
				className: "reviews-grid",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "reviews-slider-wrapper",
					children: [/* @__PURE__ */ jsx("div", {
						className: "reviews-slider",
						children: reviews.map((rev, idx) => /* @__PURE__ */ jsxs("div", {
							className: `review-card ${idx === currentIndex ? "active" : ""}`,
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "review-user",
									children: [/* @__PURE__ */ jsx("div", {
										className: "avatar",
										children: rev.name.charAt(0).toUpperCase()
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", { children: rev.name }), /* @__PURE__ */ jsx("div", {
										className: "review-date",
										children: rev.date
									})] })]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "stars",
									children: "★".repeat(rev.rating) + "☆".repeat(5 - rev.rating)
								}),
								/* @__PURE__ */ jsx("p", { children: rev.text })
							]
						}, idx))
					}), /* @__PURE__ */ jsxs("div", {
						className: "slider-controls",
						children: [
							/* @__PURE__ */ jsx("button", {
								className: "slider-btn",
								onClick: showPrev,
								"aria-label": "Предыдущий отзыв",
								children: "←"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "slider-dots",
								children: reviews.map((_, idx) => /* @__PURE__ */ jsx("span", {
									className: `dot ${idx === currentIndex ? "active" : ""}`,
									onClick: () => setCurrentIndex(idx)
								}, idx))
							}),
							/* @__PURE__ */ jsx("button", {
								className: "slider-btn",
								onClick: showNext,
								"aria-label": "Следующий отзыв",
								children: "→"
							})
						]
					})]
				}), /* @__PURE__ */ jsxs("form", {
					className: "review-form",
					onSubmit: handleSubmit,
					children: [
						/* @__PURE__ */ jsx("h3", { children: "Оставьте отзыв" }),
						/* @__PURE__ */ jsx("div", {
							className: "form-group",
							children: /* @__PURE__ */ jsx("input", {
								type: "text",
								placeholder: "Ваше имя",
								value: name,
								onChange: (e) => setName(e.target.value),
								required: true
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "form-group",
							children: [/* @__PURE__ */ jsx("label", {
								className: "rating-label",
								children: "Ваша оценка:"
							}), /* @__PURE__ */ jsx("div", {
								className: "star-rating",
								children: [
									5,
									4,
									3,
									2,
									1
								].map((num) => /* @__PURE__ */ jsxs(React.Fragment, { children: [/* @__PURE__ */ jsx("input", {
									type: "radio",
									id: `star${num}`,
									name: "rating",
									value: num,
									checked: Number(rating) === num,
									onChange: (e) => setRating(e.target.value)
								}), /* @__PURE__ */ jsx("label", {
									htmlFor: `star${num}`,
									children: "★"
								})] }, num))
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "form-group",
							children: /* @__PURE__ */ jsx("textarea", {
								placeholder: "Текст отзыва...",
								value: text,
								onChange: (e) => setText(e.target.value),
								required: true
							})
						}),
						/* @__PURE__ */ jsx("button", {
							type: "submit",
							className: "review-submit",
							children: "Отправить"
						})
					]
				})]
			})]
		})
	});
};
//#endregion
//#region src/components/Modals.jsx
var ModalOverlay = ({ isOpen, onClose, children }) => {
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") onClose();
		};
		if (isOpen) {
			document.body.style.overflow = "hidden";
			window.addEventListener("keydown", handleKeyDown);
		}
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);
	if (!isOpen) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "modal-overlay active",
		onClick: (e) => e.target === e.currentTarget && onClose(),
		children: /* @__PURE__ */ jsx("div", {
			className: "modal",
			children
		})
	});
};
var ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
	if (!product) return null;
	return /* @__PURE__ */ jsxs(ModalOverlay, {
		isOpen,
		onClose,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "modal-header",
			children: [/* @__PURE__ */ jsx("h2", { children: product.name }), /* @__PURE__ */ jsx("button", {
				className: "close-modal",
				onClick: onClose,
				children: "×"
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "modal-body",
			children: /* @__PURE__ */ jsxs("div", {
				className: "modal-product",
				children: [/* @__PURE__ */ jsx("div", {
					className: "modal-product-image",
					children: /* @__PURE__ */ jsx("img", {
						src: product.image,
						alt: product.name
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "modal-product-info",
					children: [
						/* @__PURE__ */ jsx("h3", { children: product.name }),
						/* @__PURE__ */ jsx("p", { children: product.description }),
						/* @__PURE__ */ jsxs("div", {
							className: "modal-price",
							children: [product.price, " ₽"]
						}),
						/* @__PURE__ */ jsx("button", {
							className: "modal-add",
							onClick: () => {
								onAddToCart(product);
								onClose();
							},
							children: "Добавить в корзину"
						})
					]
				})]
			})
		})]
	});
};
var CartModal = ({ cart, isOpen, onClose, onRemoveFromCart }) => {
	const total = cart.reduce((sum, item) => sum + item.price, 0);
	const handleCheckout = () => {
		if (cart.length === 0) {
			alert("Добавьте товары в корзину.");
			return;
		}
		alert("Здесь будет форма оформления заказа.");
	};
	return /* @__PURE__ */ jsxs(ModalOverlay, {
		isOpen,
		onClose,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "modal-header",
			children: [/* @__PURE__ */ jsx("h2", { children: "Корзина" }), /* @__PURE__ */ jsx("button", {
				className: "close-modal",
				onClick: onClose,
				children: "×"
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "modal-body",
			children: [
				cart.length === 0 ? /* @__PURE__ */ jsx("div", {
					className: "cart-empty",
					children: "Корзина пока пустая"
				}) : /* @__PURE__ */ jsx("div", { children: cart.map((item, index) => /* @__PURE__ */ jsxs("div", {
					className: "cart-item",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", { children: item.name }), /* @__PURE__ */ jsxs("p", { children: [item.price, " ₽"] })] }), /* @__PURE__ */ jsx("button", {
						className: "remove-item",
						onClick: () => onRemoveFromCart(index),
						children: "×"
					})]
				}, index)) }),
				/* @__PURE__ */ jsxs("div", {
					className: "cart-total",
					children: [/* @__PURE__ */ jsx("span", { children: "Итого:" }), /* @__PURE__ */ jsxs("span", { children: [total, " ₽"] })]
				}),
				/* @__PURE__ */ jsx("button", {
					className: "checkout",
					onClick: handleCheckout,
					children: "Оформить заказ"
				})
			]
		})]
	});
};
//#endregion
//#region src/components/Sections.jsx
var Hero = () => /* @__PURE__ */ jsx("section", {
	className: "hero",
	children: /* @__PURE__ */ jsxs("div", {
		className: "hero-content",
		children: [
			/* @__PURE__ */ jsx("small", { children: "Натуральные продукты" }),
			/* @__PURE__ */ jsxs("h1", { children: [
				"Фермерская",
				/* @__PURE__ */ jsx("br", {}),
				"лавка"
			] }),
			/* @__PURE__ */ jsx("p", { children: "Настоящий вкус детства. Домашние продукты от местных фермеров прямо к вашему столу." }),
			/* @__PURE__ */ jsx("a", {
				href: "#catalog",
				className: "hero-button",
				children: "Смотреть товары"
			})
		]
	})
});
var About = () => /* @__PURE__ */ jsx("section", {
	className: "about",
	id: "about",
	children: /* @__PURE__ */ jsx("div", {
		className: "container",
		children: /* @__PURE__ */ jsxs("div", {
			className: "about-grid",
			children: [/* @__PURE__ */ jsx("div", { className: "about-image" }), /* @__PURE__ */ jsxs("div", {
				className: "about-content",
				children: [
					/* @__PURE__ */ jsx("span", { children: "Немного о нас" }),
					/* @__PURE__ */ jsx("h2", { children: "Всё как в детстве" }),
					/* @__PURE__ */ jsx("p", { children: "Мы собираем в одном месте продукты, которые напоминают настоящий домашний стол." }),
					/* @__PURE__ */ jsx("p", { children: "Молоко, сыр, колбаса, мясо и другие продукты от небольших фермерских хозяйств." }),
					/* @__PURE__ */ jsxs("div", {
						className: "advantages",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "advantage",
								children: [/* @__PURE__ */ jsx("div", {
									className: "advantage-icon",
									children: "✓"
								}), /* @__PURE__ */ jsx("span", { children: "Натуральные продукты" })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "advantage",
								children: [/* @__PURE__ */ jsx("div", {
									className: "advantage-icon",
									children: "✓"
								}), /* @__PURE__ */ jsx("span", { children: "Проверенные фермеры" })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "advantage",
								children: [/* @__PURE__ */ jsx("div", {
									className: "advantage-icon",
									children: "✓"
								}), /* @__PURE__ */ jsx("span", { children: "Свежие поставки" })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "advantage",
								children: [/* @__PURE__ */ jsx("div", {
									className: "advantage-icon",
									children: "✓"
								}), /* @__PURE__ */ jsx("span", { children: "Честные цены" })]
							})
						]
					})
				]
			})]
		})
	})
});
var Contacts = () => /* @__PURE__ */ jsx("section", {
	className: "contacts",
	id: "contacts",
	children: /* @__PURE__ */ jsx("div", {
		className: "container",
		children: /* @__PURE__ */ jsxs("div", {
			className: "contacts-grid",
			children: [/* @__PURE__ */ jsx("div", {
				className: "contact-photo",
				children: /* @__PURE__ */ jsx("iframe", {
					src: "https://yandex.ru/map-widget/v1/?ll=50.806799%2C61.669707&mode=whatshere&whatshere%5Bpoint%5D=50.803661%2C61.671597&whatshere%5Bzoom%5D=15.84&z=15",
					width: "100%",
					height: "400",
					frameBorder: "0",
					allowFullScreen: true,
					title: "Map"
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "contact-content",
				children: [
					/* @__PURE__ */ jsx("h2", { children: "Связь с нами" }),
					/* @__PURE__ */ jsxs("div", {
						className: "contact-item",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "contact-icon",
							children: [" ", /* @__PURE__ */ jsxs("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "16",
								height: "16",
								fill: "currentColor",
								class: "bi bi-geo-alt",
								viewBox: "0 0 16 16",
								children: [/* @__PURE__ */ jsx("path", { d: "M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" }), /* @__PURE__ */ jsx("path", { d: "M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" })]
							})]
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "Адрес" }), /* @__PURE__ */ jsx("p", { children: "г. Сыктывкар, ул. Примерная, 12" })] })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "contact-item",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "contact-icon",
							children: [" ", /* @__PURE__ */ jsx("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "16",
								height: "16",
								fill: "currentColor",
								class: "bi bi-telephone",
								viewBox: "0 0 16 16",
								children: /* @__PURE__ */ jsx("path", { d: "M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" })
							})]
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "Телефон" }), /* @__PURE__ */ jsx("p", { children: "+7 (900) 000-00-00" })] })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "contact-item",
						children: [/* @__PURE__ */ jsx("div", {
							className: "contact-icon",
							children: /* @__PURE__ */ jsxs("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "16",
								height: "16",
								fill: "currentColor",
								class: "bi bi-stopwatch",
								viewBox: "0 0 16 16",
								children: [/* @__PURE__ */ jsx("path", { d: "M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" }), /* @__PURE__ */ jsx("path", { d: "M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" })]
							})
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "Режим работы" }), /* @__PURE__ */ jsx("p", { children: "Ежедневно: 09:00 — 21:00" })] })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "socials",
						children: [
							/* @__PURE__ */ jsx("a", {
								href: "#",
								className: "social vk",
								children: "VK"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#",
								className: "social max",
								children: "WA"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#",
								className: "social telegram",
								children: "TG"
							})
						]
					})
				]
			})]
		})
	})
});
var Footer = () => /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsxs("div", {
	className: "footer-inner",
	children: [/* @__PURE__ */ jsx("div", {
		className: "footer-logo",
		children: "Фермерская лавка"
	}), /* @__PURE__ */ jsxs("div", {
		className: "footer-links",
		children: [
			/* @__PURE__ */ jsx("a", {
				href: "#catalog",
				children: "Каталог"
			}),
			/* @__PURE__ */ jsx("a", {
				href: "#about",
				children: "О нас"
			}),
			/* @__PURE__ */ jsx("a", {
				href: "#reviews",
				children: "Отзывы"
			}),
			/* @__PURE__ */ jsx("a", {
				href: "#contacts",
				children: "Контакты"
			})
		]
	})]
}) });
//#endregion
//#region src/pages/index/+Page.jsx
var _Page_exports = /* @__PURE__ */ __exportAll({ default: () => App });
function App() {
	const [cart, setCart] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [activeModal, setActiveModal] = useState(null);
	const handleAddToCart = (product) => {
		setCart((prev) => [...prev, product]);
	};
	const handleRemoveFromCart = (index) => {
		setCart((prev) => prev.filter((_, i) => i !== index));
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "app",
		children: [
			/* @__PURE__ */ jsx(Header, {
				cartCount: cart.length,
				onOpenCart: () => setActiveModal("cart")
			}),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(Catalog, {
				products: PRODUCTS,
				onOpenProduct: (prod) => {
					setSelectedProduct(prod);
					setActiveModal("product");
				},
				onAddToCart: handleAddToCart
			}),
			/* @__PURE__ */ jsx(About, {}),
			/* @__PURE__ */ jsx(ReviewsSection, {}),
			/* @__PURE__ */ jsx(Contacts, {}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(ProductModal, {
				product: selectedProduct,
				isOpen: activeModal === "product",
				onClose: () => setActiveModal(null),
				onAddToCart: handleAddToCart
			}),
			/* @__PURE__ */ jsx(CartModal, {
				cart,
				isOpen: activeModal === "cart",
				onClose: () => setActiveModal(null),
				onRemoveFromCart: handleRemoveFromCart
			})
		]
	});
}
//#endregion
//#region src/pages/+Layout.jsx
var _Layout_exports = /* @__PURE__ */ __exportAll({ default: () => Layout });
function Layout({ children }) {
	return /* @__PURE__ */ jsx(Fragment, { children });
}
//#endregion
//#region src/pages/index/+title.js
var _title_exports = /* @__PURE__ */ __exportAll({ default: () => _title_default });
var _title_default = "Доставка продуктов — Лавка";
//#endregion
//#region \0virtual:vike:page-entry:server:/src/pages/index
var configValuesSerialized = {
	["isClientRuntimeLoaded"]: {
		type: "computed",
		definedAtData: null,
		valueSerialized: {
			type: "js-serialized",
			value: true
		}
	},
	["onRenderHtml"]: {
		type: "standard",
		definedAtData: {
			"filePathToShowToUser": "vike-react/__internal/integration/onRenderHtml",
			"fileExportPathToShowToUser": []
		},
		valueSerialized: {
			type: "pointer-import",
			value: onRenderHtml
		}
	},
	["Page"]: {
		type: "standard",
		definedAtData: {
			"filePathToShowToUser": "/src/pages/index/+Page.jsx",
			"fileExportPathToShowToUser": []
		},
		valueSerialized: {
			type: "plus-file",
			exportValues: _Page_exports
		}
	},
	["passToClient"]: {
		type: "cumulative",
		definedAtData: [{
			"filePathToShowToUser": "vike-react/config",
			"fileExportPathToShowToUser": ["default", "passToClient"]
		}],
		valueSerialized: [{
			type: "js-serialized",
			value: ["_configViaHook"]
		}]
	},
	["Layout"]: {
		type: "cumulative",
		definedAtData: [{
			"filePathToShowToUser": "/src/pages/+Layout.jsx",
			"fileExportPathToShowToUser": []
		}],
		valueSerialized: [{
			type: "plus-file",
			exportValues: _Layout_exports
		}]
	},
	["title"]: {
		type: "standard",
		definedAtData: {
			"filePathToShowToUser": "/src/pages/index/+title.js",
			"fileExportPathToShowToUser": []
		},
		valueSerialized: {
			type: "plus-file",
			exportValues: _title_exports
		}
	},
	["Loading"]: {
		type: "standard",
		definedAtData: {
			"filePathToShowToUser": "vike-react/__internal/integration/Loading",
			"fileExportPathToShowToUser": []
		},
		valueSerialized: {
			type: "pointer-import",
			value: import5
		}
	}
};
//#endregion
export { configValuesSerialized };
