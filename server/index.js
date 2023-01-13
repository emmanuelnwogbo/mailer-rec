require("dotenv").config();
import "regenerator-runtime/runtime.js";
import express from "express";
import http from "http";
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

import mongoose from 'mongoose';

import routes from './routes';

const app = express();

app.use(express.static('public'));

/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://osnoanix.com");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    if (req.method === 'OPTIONS') {
      //res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    }
    next();
  });*/

app.use(cors({
    origin: '*', // use your actual domain name (or localhost), using * is not recommended
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept'],
}))
  

/*const whitelist = ['https://osnoanix.com', 'https://www.osnoanix.com'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))*/


app.use(express.urlencoded({
  extended: false
}));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const {
  contact,
  services
} = routes;

const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(contact);
app.use(services);

mongoose.connect(process.env.DB, {

    /*useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true */
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    socketTimeoutMS: 1000
}).then(() => {
    console.log('connected to database');


    server.listen(PORT, async (error) => {
      if (error) {
        return error;
      }
    
      return console.log(`server started on port here ${PORT}`);
    });
});