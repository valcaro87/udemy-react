import React from 'react';
import PRODUCTS from './mock_products';
import styles from './products.css';

export default class ProductRow extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    let product_id = this.props.id || +this.props.params.id
    this.product = PRODUCTS.find((product) =>
      product.id === product_id
    )
  }

  render() {
    let { product_name, color, price, product_material, product_adjective, text, image } = this.product
    return (
      <div>
        <h3>{product_name}</h3>
        <span> <img src={image} width="200px" /></span>
        <h4>Has a wonderful {color}, with inspired {product_adjective} {product_material} properties, that cost ${price}...</h4>
        <ul>
          <li>Color: {color}</li>
          <li>Price: $ {price}</li>
          <li>Adjective: {product_adjective}</li>
          <li>Material: {product_material}</li>
          <li>Description: {text}</li>
        </ul>
      </div>
    )
  }
}
