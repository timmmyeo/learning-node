const fs = require('fs');

// encode the stream as it comes in
// no need to use tostring then
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');


// event listener, fires every time a chunk 
// of data arrives?
// readStream.on('data', (chunk) => {
//   console.log('---- NEW CHUNK -----');
//   console.log(chunk);

//   writeStream.write('\nNEW CHUNK\n');
//   writeStream.write(chunk);
// })

// pipes - same as above
readStream.pipe(writeStream);

// duplex strings?


