const sequelize = require('../db.js');
const Kids = sequelize.import('../models/Kids');
const router = require('express').Router();

router.post('/', function(req, res){
    const values = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        dob : req.body.dob, 
        street : req.body.street, 
        city : req.body.city, 
        state : req.body.state,
        zip : req.body.zip,
        parent_name1 : req.body.parent_name1,
        parent_name2 : req.body.parent_name2, 
        parent_phone :  req.body.parent_phone, 
        parent_phone2 : req.body.parent_phone2, 
        parents_email : req.body.parents_email
    }
    Kids.create(values)
        .catch(err => {
            res.json({
                error : `${err.name}=> ${err.message}`, 
                message : 'There was a problem adding a child'
            })
        })
        .then(kid => {
            res.json({
                kid: kid, 
                message: `You have added ${kid.first_name}` 
            })
        })
})

router.get('/', function(req, res){
    Kids.findAll()
        .catch((err) => {
            res.json({
                error : `${err.name}=> ${err.message}`, 
                message : 'Honey I shrunk the kids!'
            })
        })
    
        .then(function(allKids){
            res.json({
                kids: allKids,
                message: 'Here\'s all of the kids!'
            })
    })
})

router.get('/:id', function(req, res){
    const kidId = req.params.id
    Kids.findOne({where: {id: kidId}})
    .catch((err) => {
        res.json({
            error : `${err.name}=> ${err.message}`, 
            message : 'Cannot find that one kid...'
        })
    })
    .then((singleKid) => {
        if (singleKid){ 
            res.json({
                kid: singleKid, 
                message: 'We found that kid!'
            })
        } else {
            res.json({
                message: 'No kid...'
            })
        }
    })
})

router.delete('/', function(req, res){
    const kidId = req.body.kid.id
    
    Kids.destroy({where: {id: kidId}})
    .then((data) => {
        res.json({
            message: `You have removed a kid`
        })
    })
})


router.put('/', function(req, res){
    const updateValues = {
        id: req.body.id,
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        dob : req.body.dob, 
        street : req.body.street, 
        city : req.body.city, 
        state : req.body.state,
        zip : req.body.zip,
        parent_name1 : req.body.parent_name1,
        parent_name2 : req.body.parent_name2, 
        parent_phone :  req.body.parent_phone, 
        parent_phone2 : req.body.parent_phone2, 
        parents_email : req.body.parents_email
    }

    Kids.update(updateValues, {where: {id: updateValues.id}})
    .then(kidUpdate => {
        res.json({
            kid: kidUpdate,
            message: 'You have updated a kid'
        })
    })
})
module.exports = router;