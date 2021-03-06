const fs = require('fs');
const pool = require('../utils/pool');
const store = require('../store');

describe('store function', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('takes an array of books and saves them in the database', async() => {
    const books = [
      { image: 'media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg', starRating: 'Three', title: 'A Light in the Attic', price: '£51.77', stock: true
      }
    ];

    await store(books);

    const { rows } = await pool.query('SELECT * FROM books');

    expect(rows).toHaveLength(1);
  });

});
