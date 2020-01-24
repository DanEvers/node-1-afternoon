const products = require('../products.json');

const getProducts = (req, res) => {
    if(req.query.price) {
    const findByPrice = products.filter((element) => {
        return element.price >= parseInt(req.query.price);})
        return res.status(200).send(findByPrice);
    }
    res.status(200).send(products);
}

module.exports = getProducts;
