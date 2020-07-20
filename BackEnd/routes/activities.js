const router = require('express').Router();
let Activity = require('../models/activity-model');

router.route('/').get((req, res) => {
    Activity.find()
        .then(actvities => res.json(actvities))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
    const petname = req.body.petname;
    const activity = req.body.activity;
    const duration = req.body.duration;
    const date = Date.parse(req.body.date);

    const newExercise = new Activity({ petname, activity, duration, date });

    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.send(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
    Activity.findById(req.params.id)
        .then(activity => res.json(activity))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
    Activity.findByIdAndDelete(req.params.id)
        .then(() => res.json(`Exercise deleted`))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
    Activity.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(() => res.json(`Exercise updated`))
                .catch(err => res.status(400).json(`Error: ${err}`));
        })
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;