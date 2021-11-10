import React from 'react';
import ProductProfile from '../Products/ProductProfile';
import PRODUCTS from '../Products/mock_products';
import { Link } from 'react-router';

export default class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    let randomProductId = Math.floor(Math.random() * PRODUCTS.length);

    return (
      <div>
        <hr />
        <h2>Featured Product</h2>
        <div>

          <ProductProfile id={randomProductId} />
          <Link to={`/products/${randomProductId}`}>
                        Visit >>
          </Link>
        </div>
      </div>
    )
  }
}
