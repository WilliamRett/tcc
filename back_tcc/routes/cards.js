const express = require('express');
const router =  express.Router();

router.get('/',()=>{
    console.log('teste')
});


router.post('/slide/card', (req, res) => {
    const dbCards = req.body;
    Cards.create(dbCards, (err, data) =>{
        if (err) {
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

router.get('/slide/card', (req, res) => {
    const dbCards = req.body;
    Cards.find(dbCards, (err, data) =>{
        if (err) {
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})