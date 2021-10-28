import express from 'express';
const router = express.Router();

    router.get('/', () => {
        console.log('teste')
    });
    
    router.post('/slide/card', async (req, res) => {
        const Cards = new Cards(
            {
                name: req.body.name,
                imgUrl: req.body.imgUrl,
            }
        )
        try {
            const resp = await Cards.save()
            res.json(resp)
        } catch (error) {
            res.send('Erro')
        }
    
    })
    
    router.get('/slide/card', (req, res) => {
        try {
                const card = await Cards.find()
                res.json(card)
        } catch (error) {
            res.send('Error ' + err)
        }
    })
    
    
    

module.exports = router