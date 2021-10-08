import React from 'react';
import faker from 'faker';
import ProductRow from './ProductRow';
import PRODUCTS from './mock_products';

export default class ProductList extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentWillMount() {
        this.setState({
            products: PRODUCTS
        })
    }

    render() {
        // let products = []
        // for (let i = 1; i < 26; i += 1) {
        //     let product = {
        //         product_name: faker.commerce.productName(),
        //         color: faker.commerce.color(),
        //         price: faker.commerce.price(),
        //         product_adjective: faker.commerce.productAdjective(),
        //         product_material: faker.commerce.productMaterial(),
        //         id: i
        //     }
        //     products.push(product);
        // }
        //console.log(products);
        // let fakeName = faker.name.findName()

        let { products } = this.state;
        return (
            <div>
                {products.map((product) =>
                    <ProductRow key={product.id} product={product} />
                )}
            </div >
        )
    }
}