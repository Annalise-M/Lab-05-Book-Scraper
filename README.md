# Scraper

* scrape all blue line station times
* scrape all quotes (text, author, tags)		   
* request
     * use `node-fetch` to make request
     * use jsdom to create a document
     * return a document
   * parse
     * grab each station name and id
     * grab each station time table
     * return an array of { name, id, time }
   * store
     * create stops table
     * create `Stop` model
     * create `insertBulk`
   * scrap
     * use request, parse, store
