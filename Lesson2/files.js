// file system module
const fs = require('fs');

// reading files

// asynchronous
fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  // this is a buffer
  // console.log(data);
  console.log('reading...');
  console.log(data.toString())
})


console.log('last line');

// writing files

// replace text in file
// will create file if doesn't exist
fs.writeFile('./docs/blog1.txt', 'hello world', () => {
  console.log('file was written!');
});

// directories

if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  })
}
else {
  console.log('assets already exists!');
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('folder deleted');
  })
}
// error if directory already exists

// deleting files

if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  })
}