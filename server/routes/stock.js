import express from 'express';
import axios from 'axios';
const { StringStream } = require("scramjet");

const router = express.Router();
const stock = router;

const api_key = 'TIY0G6MULXYO0YO4';
const stock_ticker = "AAPL";
/*const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stock_ticker}&apikey=${api_key}`;

axios.get(url)
  .then((response) => {
    // Handle the response data
    console.log(response.data);
  })
  .catch((error) => {
    // Handle any errors that occur during the request
    console.error(error);
  });*/

  //==================================================================================================================>

  /*const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stock_ticker}&apikey=${api_key}`;

  axios.get(url)
  .then((response) => {
    // Handle the response data
    console.log(response.data);
  })
  .catch((error) => {
    // Handle any errors that occur during the request
    console.error(error);
  })*/

  
  /*const url = `https://www.alphavantage.co/query?function=IPO_CALENDAR&apikey=${api_key}`

  axios.get(url)
  .then((response) => {
    // Handle the response data
    console.log(response.data);
  })
  .catch((error) => {
    // Handle any errors that occur during the request
    console.error(error);
  });*/

  //const url = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=${api_key}`;

  /*axios.get(url)
  .then((response) => {
    // Handle the response data
    console.log(response.data);
  })
  .catch((error) => {
    // Handle any errors that occur during the request
    console.error(error);
  })*/

  stock.get('/api/stock', async (req, res) => {
    
  });

  export default stock;