import express from "express";
import mongoose from "mongoose";
import Cards from "./models/dbCards.js";
import Cors from 'cors';


// app config 
 const app = express();
 const port = process.env.PORT || 8033;
 const connection_url = 'mongodb+srv://admin:admin@cluster0.b5qpg.mongodb.net/JobSlide?retryWrites=true&w=majority';

// Middlewares
app.use(express.json());
app.use(Cors());
//DB config
mongoose.connect(
    connection_url,
    async(err)=>{
        if(err) throw err;
        console.log("conncted to db")
    }
)
console.log('mongoose version:'+mongoose.version);

// API EndPoint 
app.get("/", (req, res)=> res.status(200).send("Entrou ehehehe"));

app.post('/slide/card', (req, res) => {
    const dbCards = req.body;
    Cards.create(dbCards, (err, data) =>{
        if (err) {
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/slide/card', (req, res) => {
    const dbCards = req.body;
    Cards.find(dbCards, (err, data) =>{
        if (err) {
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
