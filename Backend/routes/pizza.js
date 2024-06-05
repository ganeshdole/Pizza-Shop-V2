const express = require("express");
const db = require('../db');
const utils = require("../utils");

const router = express.Router();

router.get('/', async (req, res)=>{
    try{
        const statement = 'select id, name, price,details, image from pizza'
        const [result] = await db.execute(statement);
        res.send(utils.createResult(result));
    }catch(error){  
        console.log("Server Error: ", error);
        res.send(utils.createError(error));
    }
})

module.exports = router;
