import React from 'react';
import { Link } from 'react-router';

export default class ProductRow extends React.Component {
    constructor() {
        super();
    }

    render() {
        let { id, product_name, product_material, product_adjective, color, price, text, image } = this.props.product
        return (
            <div>
                <Link to={`/products/${id}`}>
                    <h3>{product_name}</h3>
                </Link>
                <span> <img src={image} width="50px" /></span>

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