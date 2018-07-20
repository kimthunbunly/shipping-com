const router = require('express').Router();
const checkUrl = require ('../middlewares/checkUrl');
const queryField = require ('../config/queryField');
const insertEntity = require ('../middlewares/insertEntity');
const removeEntity = require ('../middlewares/removeEntity');
const updateEntity = require ('../middlewares/updateEntity');
const checkUpdateBody = require ('../middlewares/checkUpdateBody');

module.exports = (endPoint, model, callback) => {

    let Model = require(`../models/${model}`);

    if (insertEntity[model]) router.post (endPoint , insertEntity[model]);

    router.get(endPoint, async (req, res) => {
        try {
            await checkUrl(req , model);
            let docs = await Model.find( req.filter, req.opts )
                                  .sort( req.query.sort )
                                  .limit( req.limit );
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
            console.log(ex.message);
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

    router.put(endPoint + '/:id', async (req, res) => {
        try {
            const update = await queryField ( model , req.body , 'update');

            let doc = await Model.findByIdAndUpdate(req.params.id, update);

            res.json(doc);
        } catch(ex) {
            res.status(500).json(ex);
        }
    });

    router.delete(endPoint + '/:id', async (req, res) => {
        let docs = await Model.find({_id : req.params.id});
        if(!docs[0]) return res.status(400).json({ message: '' });
        else {
          try {
              let doc = await docs[0].remove();
              res.json(doc);
              if (removeEntity[model]) removeEntity[model] (doc);
          } catch(ex) {
              res.status(400).json({ error: ex.message });
              console.log(ex.message)
          }
        }
    });

    router.post(endPoint + '/insert/many', async (req, res) => {
        //console.log(req.body);
        //let model = new Model(req.body);
        try {
            let docs = await Model.insertMany(req.body);

            res.json(docs);
        } catch (ex) {
            res.status(400).json({ error: ex.message });
            console.log(ex.message);
        }
    });

    router.delete(endPoint + '/remove/many', async (req, res) => {
        //console.log(req.body);
        //let model = new Model(req.body);
        try {
            let result = await Model.remove({_id : {$in : req.body}});

            res.json(result);
        } catch(ex) {
            res.status(400).json({ error: ex.message });
            console.log(ex.message);
        }
    });

    router.put(endPoint + '/:id/update/:method', async (req, res) => {
        if (updateEntity[model]) {
          const check = await checkUpdateBody(model, req.body);

          if (check === true) updateEntity[model] (req, result => res.json (result));
          else res.json (check);
        } else {
            res.status(500).json("There is no ref field to update for this " + model);
        }
    });

    callback(router);
}
