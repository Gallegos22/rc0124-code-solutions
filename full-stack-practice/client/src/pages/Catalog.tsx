import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { type Product, toDollars } from '../lib';
import './Catalog.css';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error(`fetch error ${response.status}`);
        }
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return (
      <div>
        Error Loading Catalog:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }
  return (
    <div className="container">
      <h1>Catalog</h1>
      <hr />
      <div className="row">
        {products?.map((product) => (
          <div key={product.productId} className="col-12 col-md-6 col-lg-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  product: Product;
};
function ProductCard({ product }: CardProps) {
  const { productId, name, price, imageUrl, shortDescription } = product;
  return (
    <Link
      to={`details/${productId}`}
      className="product text-dark card mb-4 shadow-sm text-decoration-none">
      <img src={imageUrl} className="image card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-secondary">{toDollars(price)}</p>
        <p className="description card-text">{shortDescription}</p>
      </div>
    </Link>
  );
}
