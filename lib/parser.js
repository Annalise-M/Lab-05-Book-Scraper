const parse = document => {
  const bookElements = [...document.querySelectorAll('.product_pod')];

  return bookElements.map(book => {
    // book image
    const image = book.querySelector('.image_container img').getAttribute('src');

    // star rating
    const starRating = book.querySelector('.star-rating').getAttribute('class').split(' ')[1];

    // book title
    const title = book.querySelector('h3 > a').getAttribute('title');

    // book price
    const price = book.querySelector('.price_color').textContent;

    // book instock_availability
    const stock = book.querySelector('.availability').textContent ? true : false;
      
    
    return ({ image, starRating, title, price, stock });
  });
};

module.exports = parse;
