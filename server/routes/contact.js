import express from 'express';

const router = express.Router();
const contact = router;

import Contact from '../models/contact';

contact.post('/api/contact', async (req, res) => {
        const contact = new Contact(req.body);
        
        try {
            await contact.save();
            res.status(201).send({
                message: "message created",
                contact
            });
        } catch(e) {
            res.status(400).send(e);
        }
});

contact.get('/api/98376t4yuehjkw8767hy', (req, res) => {
    Contact.find().then(contacts => {
        res.status(201).send({ 
            contacts
        });
    })
});

export default contact;