import React from 'react';
import PropTypes from 'prop-types';
import Reviews from '../Reviews';
import currencyFormatter from '../../utils/currencyFormatter';
import { Link } from 'react-router-dom';

function Product({
  product,
  isLoading,
  cartItem,
  addToCart,
  updateCartItem,
  deleteCartItem,
}) {
  
  return (
    <div
      key={product.id}
      className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8 my-10"
    >
      <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-2 lg:col-span-3">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover object-center"
        />
      </div>
      <div className="sm:col-span-10 lg:col-span-9 grid h-full">
      <Link to={`products/${product.id}`} > 
        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
          {product.title}
        </h2>
        </Link>

        <section aria-labelledby="information-heading" className="mt-2">
          <h3 id="information-heading">{product.description}</h3>

          <p data-testid="price" className="text-2xl text-gray-900">
          {currencyFormatter(product.price)}
          </p>

          {/* Reviews */}
          <Reviews {...product.rating} />
        </section>

        <section aria-labelledby="options-heading" className="mt-4">
          {cartItem ? (
            <div className="flex items-center">
              <button
                type="button"
                disabled={isLoading}
                className="flex flex-1 w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-500 disabled:cursor-wait"
                onClick={() =>
                  updateCartItem({
                    ...cartItem,
                    quantity: cartItem.quantity + 1,
                  })
                }
              >
                +
              </button>
              <p className="flex-1 text-2xl font-bold text-center">
                {cartItem.quantity}
              </p>
              <button
                type="button"
                disabled={isLoading}
                className="flex flex-1 w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  disabled:bg-slate-500 disabled:cursor-wait"
                onClick={() => {
                  if (cartItem.quantity <= 1) {
                    deleteCartItem(cartItem);
                  } else {
                    updateCartItem({
                      ...cartItem,
                      quantity: cartItem.quantity - 1,
                    });
                  }
                }}
              >
                -
              </button>
            </div>
          ) : (
            <button
              type="button"
              disabled={isLoading}
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-500 disabled:cursor-wait"
              onClick={() =>
                addToCart({
                  productId: product.id,
                  quantity: 1,
                })
              }
            >
              Add to bag
            </button>
          )}
        </section>
        {/* <Buttons key={product.id} product={product} /> */}
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.objectOf(
    PropTypes.exact({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      description: PropTypes.string,
      category: PropTypes.string,
      image: PropTypes.string,
      rating: PropTypes.shape({
        rate: PropTypes.number,
        count: PropTypes.number,
      }),
    }),
  ),
  isLoading: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  updateCartItem: PropTypes.func.isRequired,
  deleteCartItem: PropTypes.func.isRequired,
  cartItem: PropTypes.shape({
    quantity: PropTypes.number,
  }),
};

Product.defaultProps = {
  cartItem: undefined,
};

export default Product;
