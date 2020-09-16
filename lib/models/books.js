const pool = require('../utils/pool');

class Book {
    image;
    starRating;
    title;
    price;
    stock;

    constructor(row) {
      this.id = row.id;
      this.image = row.image;
      this.starRating = row.star_rating;
      this.title = row.title;
      this.price = row.price;
      this.stock = row.stock;
    }

    static async insert(book) {
      const { rows } = await pool.query(
        'INSERT INTO books (image, star_rating, title, price, stock) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [book.image, book.starRating, book.title, book.price, book.stock]
      );
    
      return new Book(rows[0]);
    }
}

module.exports = Book;
