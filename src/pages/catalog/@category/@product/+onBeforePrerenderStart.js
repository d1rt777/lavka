import { PRODUCTS } from '../../../../data/Products';

export default function onBeforePrerenderStart() {
  return PRODUCTS.map((product) => ({
    url: `/catalog/${product.categorySlug}/${product.slug}`
  }));
}