const express = require('express');
const routes = require('./routes');

// gets port number from heroku (env.PORT)
const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));
app.use(routes);

app.listen(PORT, ()=>{
  console.log("listening at http://localhost:" + PORT);
});