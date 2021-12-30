import React from 'react';
import ProductProfile from '../Products/ProductProfile';
import PRODUCTS from '../Products/mock_products';
import { Link } from 'react-router';
import styles from './main.css';

export default class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    let randomProductId = Math.floor(Math.random() * PRODUCTS.length);
    const { background, header, divider } = styles;

    return (
      <div>
        <div className={background} />
        {/* <div className={divider} /> */}
        <div>

          <h2>Featured Product</h2>

          <div className={header} >

            <ProductProfile id={randomProductId} />


          </div>
          {/* <div className={divider} /> */}
          <Link to={`/productlist/${randomProductId}`}>
                          Visit >>
          </Link>
        </div>
      </div>
    )
  }
}
