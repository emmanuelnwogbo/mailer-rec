import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();
const services = router;

services.get('/api/services', async (req, res) => {
    const response = await fetch(`https://api.ipstack.com/${req.ip}?access_key=${process.env.IPST}`);
    const body = await response.text();

    console.log(body);

    console.log(req.ip);

    res.status(201).send({ 
        body
    });
});

export default services;