const express = require('express');
const router =  express.Router();
import Server from "./server.js";

router.get('/',()=>{
    console.log('teste')
});


module.exports = router