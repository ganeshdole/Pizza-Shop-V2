const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv').config()
const app = express();
const PORT = 4000;
const jwt = require('jsonwebtoken')
const { createError } = require('./utils');

const userRouter = require('./routes/user');
const pizzaRouter = require('./routes/pizza');
const orderRouter = require('./routes/order');




app.use(cors());
app.use(express.json());
app.use(morgan('combined'));
app.use(express.static('images'))

app.use((req, res , next)=>{
    const skip_url = ["/user/signin","/user/signup", "/pizza"];
    console.log(req.url)
    if(skip_url.findIndex(item => item == req.url) !== -1){
        next();
    }
    else
    {
        const token = req.headers['token'];
        console.log(token)
        if(!token){
            res.send(createError({
                'Error' : "Token Missing" 
            }))
        }else{
            try{
                const payload = jwt.verify(token, process.env.SECRET);
                req.data = payload;
                next();
            }catch(error)
            {
                res.send(createError({
                    "error" : "Invalid Token"
                }))
            }
        }
       
    }
})

app.use('/user', userRouter);
app.use('/pizza', pizzaRouter);
app.use('/order', orderRouter);


app.listen(PORT, ()=>{
    console.log(`Server Started On Port : ${PORT}`);
})