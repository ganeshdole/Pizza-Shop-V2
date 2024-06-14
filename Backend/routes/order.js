const express = require('express');
const { createError, createSuccess } = require('../utils');
const db = require('../db');
const router = express.Router();

// Get all orders for a user
router.get("/", async (req, res) => {
    try {
        const statement = 'SELECT id, totalAmount, created_at FROM ordermaster WHERE userId = ?';
        const [result] = await db.execute(statement, [req.data.id]);
        res.send(createSuccess(result));
    } catch (error) {
        console.log(error);
        res.status(500).send(createError(error.message));
    }
});


router.get('/details/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const statement = 'SELECT pizzaId, quantity, totalAmount, created_at FROM orderdetail WHERE orderId = ?';
        const [orderDetails] = await db.execute(statement, [id]);
        
        if (orderDetails.length === 0) {
            return res.send(createError('No order details found'));
        }
        
        const pizzaIds = orderDetails.map(pizza => pizza.pizzaId);
        const getPizza = `SELECT id, name, details, image, price FROM pizza WHERE id IN (${pizzaIds.map(() => '?').join(', ')})`;
        const [pizzas] = await db.execute(getPizza, pizzaIds);
        
        const pizzasMap = pizzas.reduce((map, pizza) => {
            map[pizza.id] = pizza;
            return map;
        }, {});

        const detailedOrder = orderDetails.map(detail => ({
            ...detail,
            pizza: pizzasMap[detail.pizzaId]
        }));

        res.send(createSuccess(detailedOrder));
    } catch (error) {
        res.send(createError(error.message || error));
    }
});


router.post("/", async (req, res) => {

    try {
        const {id} = req.data;
        const { addressId ,totalAmount, items } = req.body;
        console.log(addressId ,totalAmount, items)
        const orderMasterStatement = `INSERT INTO orderMaster(userId, addressId, totalAmount) VALUES (?, ?, ?)`;
        const [orderMasterResult] = await db.execute(orderMasterStatement, [id, addressId, totalAmount]);
        
        const orderId = orderMasterResult.insertId;

        for (let item of items) {
            const orderDetailStatement = `INSERT INTO orderDetail (orderId, pizzaId, quantity, totalAmount) VALUES (?, ?, ?, ?)`;
            await db.execute(orderDetailStatement, [orderId, item.id, item.quantity, item.quantity * item.price]);
        }
        res.send(createSuccess({ message: 'Order Placed Successfully', orderId }));
    } catch (error) {
        await connection.rollback();
        console.log(error);
    }
});

module.exports = router;
