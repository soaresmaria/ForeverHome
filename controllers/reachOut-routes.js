const router = require('express').Router();
const sequelize = require('../config/connection');
const { ReachOut, User } = require('../models/');

router.post('/', (req, res) => {
    ReachOut.create({
        your_name: req.body.your_name,
        your_contact_number: req.body.your_contact_number,
        your_message: req.body.your_message
    })
    .then(userMessage => res.json(userMessage))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



module.exports = router;