// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;

// Static directory
app.use(express.static("./public"));


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static(process.cwd() + '/public'));
app.use(methodOverride('_method'));

// handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// ============================== Routes ==============================
require('./controllers/controller.js')(app);
// app.use('/', routes);


app.listen(PORT, function() {
  console.log(`App running on port ${PORT}!`);
});