import faker from 'faker';

const PRODUCTS = []

for (let i = 1; i < 26; i += 1) {
    let product = {
        product_name: faker.commerce.productName(),
        color: faker.commerce.color(),
        price: faker.commerce.price(),
        product_adjective: faker.commerce.productAdjective(),
        product_material: faker.commerce.productMaterial(),
        id: i,
        text: faker.lorem.paragraphs(),
        image: faker.random.image()
    }
    PRODUCTS.push(product);
}

export default PRODUCTS;