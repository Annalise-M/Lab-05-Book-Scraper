const request = require('../request');

describe('request function', () => {
  it('makes a request to the Blue Line page and returns the html', async() => {
    const document = await request();

    expect(document.querySelector('.page-header h1').textContent)
      .toEqual('All products');
  });
});
