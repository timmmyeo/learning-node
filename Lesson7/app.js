const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
// change view folder:
// app.set('views', 'myviews');

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
  // auto infers the status code and the header info
  // res.send('<p>home page </p>');
  res.sendFile('./views/index.html', { root: __dirname });
})

app.get('/about', (req, res) => {
  // auto infers the status code and the header info
  // res.send('<p>about page </p>');
  res.sendFile('./views/about.html', { root: __dirname });
})

// redirects
app.get('/aboutus', (req, res) => {
  res.redirect('/about');
})

// 404 page
// use this for every request (if it doesn't match anything above)
app.use((req, res) => {
  // set the status code
  res.status(404).sendFile('./views/404.html', { root: __dirname });
})