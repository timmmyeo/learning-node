const http = require('http');
const fs = require('fs');
const _ = require('lodash');

// if you need web sockets, you can store the server
// const server = http.createServer((req, res) => {
//   console.log('request made');
//   console.log('request: ', req.url, ' method: ', req.method);

//   // set header content type
//   res.setHeader('Content-Type', 'text/plain');
//   res.write('hello, ninjas');
//   res.end();
// });

// const server = http.createServer((req, res) => {
//     console.log('request made');
//     console.log('request: ', req.url, ' method: ', req.method);
  
//     // set header content type
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<p>hello, ninjas</p>');
//     res.write('<p>hello again, ninjas</p>');
//     res.end();
//   });

const server = http.createServer((req, res) => {
  // lodash, get random number between 0 and 20
  const num = _.random(0, 20);

  const greet = _.once(() => {
    console.log('hello!');
  })

  // greets only runs once
  greet();
  greet();

  console.log('request made ', num);
  console.log('request: ', req.url, ' method: ', req.method);

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  let path = './views/';
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/aboutme':
      // redirect
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  // send a html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    else {
      // res.write(data);
      // writing once:
      res.end(data);
    }
  })
});

// default is localhost
server.listen(3000, 'localhost', () => {
  console.log('listening for requests now!');
});