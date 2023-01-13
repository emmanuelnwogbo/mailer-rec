import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();
const services = router;

/*services.get('/api/checkphone', async (req, res) => {
    const response = await fetch(`https://api.ipstack.com/${req.ip}?access_key=${process.env.IPST}`);
    const body = await response.text();

    console.log(body);

    console.log(req.ip);

    res.status(201).send({ 
        body
    });
});*/

services.get('/api/validatephone', async (req, res) => {
        const { phonenumber } = req.query;

        //console.log(phonenumber)

        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {
                apikey: `${process.env.PAPK}`
            }
        };

        fetch(`https://api.apilayer.com/number_verification/validate?number=${phonenumber}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                res.status(201).send(result);
            })
            .catch(error => console.log('error', error));
})

export default services;