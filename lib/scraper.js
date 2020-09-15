const request = require('./lib/request');
const parse = require('./lib/parse');
const store = require('./lib/store');

setInterval(() => {
  request()
    .then(document => parse(document))
    .then(books => store(books));
});
