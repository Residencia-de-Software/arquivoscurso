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

        //coloca o default da requisição como page = 1
        const {page = 1} = req.query; //desistruturação de objeto 

        const products = await Product.paginate({},{page, limite: 10})

        return res.json(products);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body,
            { new: true, useFindAndModify: false })

        return res.json(product);
    },

    async destroy(req, res){
        const product = await Product.findByIdAndRemove(req.params.id);

        return res.send();
    },

    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    }
}


