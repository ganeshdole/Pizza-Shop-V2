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


router.get('/details/:id', async( req, res) => {
    try{
        const {id} = req.params;
        const statement = 'select pizzaId,  quantity, totalAmount, created_at from orderdetail where orderId = ?';
        const [result] = await db.execute(statement, [id]);
        res.send(createSuccess(result));
    }
    catch(error)
    {
        res.send(createError(error));
    }
})

router.post("/", async (req, res) => {
    const connection = await db.getConnection();
    try {
        await connection.beginTransaction();

        const { userId, addressId, totalAmount, items } = req.body;
        const orderMasterStatement = `INSERT INTO orderMaster(userId, addressId, totalAmount) VALUES (?, ?, ?)`;
        const [orderMasterResult] = await connection.execute(orderMasterStatement, [userId, addressId, totalAmount]);
        const orderId = orderMasterResult.insertId;

        for (let item of items) {
            const orderDetailStatement = `INSERT INTO orderDetail (orderId, pizzaId, quantity, totalAmount) VALUES (?, ?, ?, ?)`;
            await connection.execute(orderDetailStatement, [orderId, item.id, item.quantity, item.totalAmount]);
        }

        await connection.commit();
        res.send(createSuccess({ message: 'Order Placed Successfully', orderId }));
    } catch (error) {
        await connection.rollback();
        console.log(error);
        res.status(500).send(createError(error.message));
    } finally {
        connection.release();
    }
});

module.exports = router;
