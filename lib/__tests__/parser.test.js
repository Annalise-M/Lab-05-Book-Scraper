const request = require('../request');
const parse = require('../parser');

describe('parse function', () => {
  it('returns an array of all books image, star rating, title, price and instock availability', async() => {
    const document = await request(1);

    const books = parse(document);

    expect(books).toEqual(expect.arrayContaining([{
      image: '../media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg', starRating: 'Three', title: 'A Light in the Attic',
      price: '£51.77', stock: true }]));
  });
});
