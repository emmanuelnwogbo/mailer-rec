import express from 'express';
import AWS, { ConnectContactLens } from 'aws-sdk';

import csvtojson from '../utils/csvtojson';
import { async } from 'regenerator-runtime';

const router = express.Router();
const ipos = router;

const s3 = new AWS.S3({
    accessKeyId: process.env.ACCESSKEYS3,
    secretAccessKey: process.env.SECRETACCESKEYS3
});

ipos.get('/api/recentipos', async (req, res) => {
    const params = { Bucket: 'osnoanix', Key: 'latestipos.csv' };

    const response = await s3.getObject(params).promise();
    const fileContent = response.Body.toString('utf-8');  
    
    const result = await csvtojson(fileContent);
    
    res.status(200).send({
        title: 'Recent IPOs',
        result
    });
});

ipos.get('/api/thisweekipos', async (req, res) => {
    const params = { Bucket: 'osnoanix', Key: 'thisweekipos.csv' };

    const response = await s3.getObject(params).promise();
    const fileContent = response.Body.toString('utf-8');  
    
    const result = await csvtojson(fileContent);

    res.status(200).send({
        title: "This Week's IPOs",
        result
    });
})

ipos.get('/api/iposcreeners', async (req, res) => {
    const params = { Bucket: 'osnoanix', Key: 'screeneripo.csv' };

    const response = await s3.getObject(params).promise();
    const fileContent = response.Body.toString('utf-8');  
    
    const result = await csvtojson(fileContent);

    res.status(200).send({
        title: "IPO Screeners",
        result
    });
})

export default ipos;