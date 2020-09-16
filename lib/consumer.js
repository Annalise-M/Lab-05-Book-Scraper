const { taskQueue } = require('./queue');

taskQueue.process(10, `${__dirname}/scraper.js`);
