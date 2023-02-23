import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Product from '../../components/Product';

function Home({ loadProducts, loadCart, products, loading, hasError }) {
  const loadData = useCallback(async () => {
    await Promise.all([loadProducts(), loadCart()]);
  }, [loadProducts, loadCart]);

  useEffect(() => {
    loadData();
  }, [loadData]);


  if (loading) {
    return <h1 data-testid="loading">Loading...</h1>;
  }

  if (hasError) {
    return <h1 data-testid="error">Something went wrong...</h1>;
  }

  return (
    <div data-testid="products-info">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

Home.propTypes = {
  loadProducts: PropTypes.func.isRequired,
  loadCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      description: PropTypes.string,
      category: PropTypes.string,
      image: PropTypes.string,
      rating: PropTypes.exact({
        rate: PropTypes.number,
        count: PropTypes.number,
      }).isRequired,
    }),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default Home;
