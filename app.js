// IMPORT LIBRARY
const express = require('express');
const guessNumber = require('./controller/guessNumber');
const pickColour = require('./controller/pickColour');
const whichTaco = require('./controller/whichTaco');
const whichBurger = require('./controller/whichBurger');

// INSTANTIATE APP
const app = express();

// GET ROUTE - NUMBER GUESSING GAME
app.get('/pickanumber/:num', guessNumber);

// GET ROUTE - NUMBER GUESSING GAME
app.get('/colour/:choice', pickColour);

// GET ROUTE - WHICH TACO
app.get('/taco/:index', whichTaco);

// GET ROUTE - WHICH BURGER
app.get('/burger/:index', whichBurger);

// FIRES UP WEB SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`Server Running at localhost: ${port}`);
});
