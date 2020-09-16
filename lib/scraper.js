const request = require('./request');
const parse = require('./parser');
const store = require('./store');

module.exports = job => {
  console.log(`About to scrape page ${job.data.page}`);

  return request(job.data.page)
    .then(document => parse(document))
    .then(books => store(books))
    .then(book => console.log(book.length));
};
