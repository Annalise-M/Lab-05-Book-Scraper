const request = require('./lib/request');
const parse = require('./lib/parse');
const store = require('./lib/store');

module.exports = job => {
  console.log(`About to scrape page ${job.data.page}`);

  return request(job.data.page)
    .then(document => parse(document))
    .then(books => store(books));
};
