import React from 'react';
import { Link } from 'react-router';

export default class ProductRow extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { id, product_name, product_material, product_adjective, color, price, text, image } = this.props.product
        return (
            <div className="pure-u-1 pure-u-md-1-3">
                <Link to={`/products/${id}`}>
                    <div className="each-product">
                        <h3>{product_name}</h3>

                        <span> <img className="pure-img" src={image} width="300px" /></span>

                        <ul>
                            <li>Color: {color}</li>
                            <li>Price: $ {price}</li>
                            {/* <li>Adjective: {product_adjective}</li>
                            <li>Material: {product_material}</li>
                            <li>Description: {text}</li> */}
                        </ul>
                    </div>
                </Link>
            </div>

        )
    }


}