const request = require('../request');

describe('request function', () => {
  it('makes a request to the booksToScrape page and returns the html pg', async() => {
    const document = await request();

    expect(document).not.toBeUndefined();
    expect(document).not.toBeNull();
  });
});
