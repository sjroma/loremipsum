const express = require('express');
const app = express();
const loremIpsum = require('lorem-ipsum');
let number;

// Let the user decide how many paragraphs get generated
app.get('/lorem/:paragraghCount', function (req, res) {
  let output = loremIpsum ({
    count: req.params.paragraphCount,
    units: 'paragraphs',
    format: 'html'
  });
  res.send(output);
});

// Works but the number of paragraphs is set by the program
//app.get('/', function (req, res) {
//  res.send('check out localhost:3000/lorem');
//});
//
//var loremIpsum = require('lorem-ipsum'),
//    output = loremIpsum ({
//    count: 3,
//    units: 'paragraphs',
//    format: 'html'
//    });
//
//app.get('/lorem', function (req, res) {
//  res.send(output);
//});

app.listen(3000, function () {
  console.log('Successfully started lorem-ipsom application')
});