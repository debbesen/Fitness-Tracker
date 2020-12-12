const router = require('express').Router();
const Workout = require('../models/index.js');


//adding workout to the database the workout
router.post('/api/workouts', ({
    body
}, res) => {
   
    console.log(body)
    Workout.create(body)
        .then(workout => {
            console.log(`This creates the workout: ${workout}`) 
            res.json(workout)
        })
        .catch(err => {
            res.status(400).json(err)
        });
        

});
//finding the workout that were added to the database
router.get('/api/workouts', (req, res) => {
 
    Workout.find({})
        .sort({
            workout: 1
        })
        .then(workout => {
            console.log(`This shows the workout: ${workout}`)
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
        
});
//updating the selected workouts
router.put('/api/workouts/:id', ({
    params, body
}, res) => {
    Workout.findByIdAndUpdate({ _id: params.id },
        {$push: {exercises: body }})
        .then(workout => {
            console.log(`This updates the workout: ${workout}`) 
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
        
})
router.get('/api/workouts/range', (req, res) => {
    
    Workout.find({})
        .sort({
            workout: 1
        })
        .then(workout => {
            console.log(`This shows the workout: ${workout}`)
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
        
});
router.put('/api/workouts/range/:id', ({
    params, body
}, res) => {
    Workout.findByIdAndUpdate({ _id: params.id },
        {$push: {exercises: body }})
        .then(workout => {
            console.log(`This updates the stats: ${workout}`) 
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
        
})
module.exports = router 