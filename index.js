//dependencies
const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const app = express();
const routes = require("./routes");
const db = require("./models");
//connections
const PORT = process.env.PORT || 5000;

db.sequelize.sync()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, './react-ui/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

// Answer API requests.
// app.get('/helloworld', function (req, res) {
//   res.set('Content-Type', 'application/json');
//   res.send('{"message":"Hello from the custom server!"}');
// });



// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/public', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});



