const parse = document => {
  const bookElements = [...document.querySelectorAll('.product_pod')];

  return bookElements.map(book => {
    const image = book.querySelector('.image_container img').getAttribute('src');
    const starRating = book.querySelector('.star-rating').getAttribute('class').split(' ')[1];
    const title = book.querySelector('h3 > a').getAttribute('title');
    const price = book.querySelector('.price_color').textContent;
    const stock = book.querySelector('.availability').textContent ? true : false;

    return ({ image, starRating, title, price, stock });
  });
};

module.exports = parse;
