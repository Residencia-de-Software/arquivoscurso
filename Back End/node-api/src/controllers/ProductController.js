const mongoose = require('mongoose');
const Product = mongoose.model('Product');

/*
Product.create({
    title: 'Android',
    description: 'Celular',
    url: 'https://scdn.slashgear.com/wp-content/uploads/2019/08/androidlogo_2019_transparent_white_png.jpg'
});
*/

module.exports = {
    async index(req, res) {
        const products = await Product.find();

        return res.json(products);
    }
}


