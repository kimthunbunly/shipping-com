const router = require('express').Router();
const bcrypt = require('bcrypt');
const auth = require('../middlewares/auth');

const User = require('../models/user');

router.get('/', async (req, res) => {
    try {
    let docs = await User.find();
        res.json(docs);
    } catch(ex) {
        res.status(500).json(ex);
}
});

router.post('/signup', async (req, res) => {
    console.log(req.body);
    let user = new User(req.body);
    try {
        let doc = await user.save();
        res.json({ message: doc });
    } catch(ex) {
        res.status(405).json({error: ex.message });
        console.log(ex.message);
    }
});

router.post('/login', async (req, res) => {
    console.log(req.body);
    let user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(400).json({ message: "There was a problem with your login." });

    let password = await bcrypt.compare(req.body.password, user.password);
    if(!password) return res.status(400).json({ message: "There was a problem with your login." });

    let token = user.genToken();
    res.header('X-Auth', token).send(user);
});

router.get('/me', auth, async (req, res) => {
    try { 
        let user = await User.findById(req.user._id);
        res.json(user);
    } catch(ex) {
        return res.status(400).json({ message: ex.message });
    }
});

router.put('/edit/:id', async (req, res) => {

    try { 
        let doc = await User.findByIdAndUpdate(req.params.id);

        if(!doc) return res.status(400).json({ message: '' });

        for(val in req.body) {
            let excStr = 'doc.' + val  + '=' + 'req.body.' + val;
            eval(excStr);
            // console.log(eval(excStr));
        }

        let user = await doc.save();

        res.json(user);

    } catch(ex) {
        res.status(400).json({ error: ex.message });
    }
});

router.delete('/', async (req, res) => {
    res.send(req.method + " " + req.originalUrl);
});
router.get('/:id', async (req,res)=>{
    const course = await User.findById(req.params.id);
    if(!course) res.status(404).json({ message: '' });
    res.send(course);
});

module.exports = router;