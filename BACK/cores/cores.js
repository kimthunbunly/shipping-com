const router = require('express').Router();

module.exports = (endPoint, model, callback) => {

    let Model = require(`../models/${model}`);

    router.get(endPoint, async (req, res) => {
        try {
            let docs = await Model.find();
            res.json(docs);
        } catch(ex) {
            res.status(500).json(ex);
        }
    });

    router.post(endPoint, async (req, res) => {
        console.log(req.body);
        let model = new Model(req.body);
        try {
            let doc = await model.save();
            
            res.json(doc);
        } catch(ex) {
            res.status(400).json({ error: ex.message });
            console.log(ex.message)
        }
    });

    router.put('/', async (req, res) => {
        res.send(req.method + " " + req.originalUrl);
    });

    router.delete('/', async (req, res) => {
        res.send(req.method + " " + req.originalUrl);
    });

    router.get(endPoint + '/:id', async (req, res) => {
        let doc = await Model.findById(req.params.id);

        if(!doc) return res.status(400).json({ message: '' });

        res.json(doc);
    });

    callback(router);
}