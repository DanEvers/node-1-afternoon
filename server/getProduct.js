const products = require('../products.json');

const getProduct = (req, res) => {
    const findById = products.find((element) => {
        return element.id === parseInt(req.params.id)
    })
    if (!findById) {
        return res.status(500).send(`Sorry, I can't find that item`)
    }
    res.status(200).send(findById)
}

module.exports = getProduct;