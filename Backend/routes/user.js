const express = require('express');
const db  = require('../db');
const { createError, createSuccess, encrypt } = require('../utils');
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post("/signup", async (req, res)=>{
    const {firstName, lastName, email, password } = req.body;
    const encryptedPassword = encrypt(password);
    try{
        const statement = 'insert into user(firstName, lastName, email, password) values(? ,? ,? ,?)';
        const [result] = await db.execute(statement,[firstName , lastName, email, encryptedPassword]);
        res.send(createSuccess(result[0]));
    }catch(error){
        console.log(error)
        res.send(createError(error))
        // throw createError(error);
    }
})


router.post("/signin", async (req, res)=>{
    try{
        const {email, password } = req.body;
        const encryptedPassword = encrypt(password);
        const statement = 'select id, firstName, lastName, email, password from user where email = ? and password = ?';
        const [result] = await db.execute(statement, [email, encryptedPassword]);
        if(result.length === 0){
            res.send(createError("User Does not exist."))
        }else{
            const user = {
                "id" : result[0].id,
                "firstName" : result[0].firstName,
                "lastName" : result[0].lastName,
                'email' : result[0].email 
            }
            const token = jwt.sign(user, process.env.SECRET)
            res.send(createSuccess({
                "token" : token
            }))
        }
    }catch(error)
    {
        console.log('Server Error: ', error)
        throw createError(error);
    }
})

module.exports = router;