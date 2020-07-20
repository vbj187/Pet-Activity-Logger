const router = require('express').Router();
let Pet = require('../models/pet-model');

router.route('/').get((req, res) => {
    Pet.find()
        .then(pets => res.json(pets))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
    const petname = req.body.petname;

    const newPet = new Pet({ petname });

    newPet.save()
        .then(() => res.json('Pet added!'))
        .catch(err => res.send(400).json(`Error: ${err}`));
});

module.exports = router;