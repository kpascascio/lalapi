const sequelize = require('../db.js');
const Behaviors = require('../models/Behaviors');
const router = require('express').Router();
const Kids = sequelize.import('../models/Kids');

router.get('/', function(req, res){
    Behaviors.findAll({
        include: [Kids]
    })

    .then(allBehaviors => {
        res.json({
            behaviors: allBehaviors, 
            message: 'Here are all of the behaviors'
        })
    })
    .catch(err =>{
        console.log('here', err)
        res.json({
            error: err
        })
    })
});

router.post('/', function(req, res){
    const values = {
        name_of_employee: req.body.name_of_employee,
        incident: req.body.incident,
        time_of_day: req.body.time_of_day,
        description: req.body.description,
        lalKidId: req.body.lalKidId,
        child: req.body.child
    }
    Behaviors.create(values)
    .then(behavior =>{
        res.json({
            behavior: behavior, 
            message: 'You have added a behavior report!'
        })
    })

})

module.exports = router;