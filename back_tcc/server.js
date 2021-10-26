import { Express } from "express";
import { Mongoose } from "mongoose";

// app config 
 const app = Express();
 const port = process.env.PORT || 8001;
// Middlewares

//DB config

// API EndPoint 
app.get("/", (req, res)=> res.status(200).send("puta"));
//Listener
app.listen(port, () => console.log('listening on localhost: ${port}'));
