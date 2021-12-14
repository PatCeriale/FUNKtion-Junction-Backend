const express = require('express');
const cors = require('cors');

const app = express();

var whitelist = [
  'http://localhost:3000/',
  'https://funktionjunctionrandomizer.herokuapp.com/',
];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require('./app/models');

// db.sequelize.sync();
// drop table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync db.');
});

// simple route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Funktion Junction backend API application.',
  });
});

require('./app/routes/person.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
