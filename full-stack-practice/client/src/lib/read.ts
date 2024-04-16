import { products, type Product } from './data';

export function readCatalog(): Promise<Product[]> {
  return Promise.resolve(products);
}

export function readProduct(productId: number): Promise<Product | undefined> {
  return Promise.resolve(products.find((p) => p.productId === productId));
}

// need these functions to make fetch requests (async function)
// need to change these two functions
