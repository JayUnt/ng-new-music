const pageScraper = require('./pageScraper');
const firebaseService = require('./firebase.service');

(async() => {
  console.log('Start Scraping');
  const albums = await pageScraper.scrapeAll();

  await firebaseService(albums);

  console.log('Scraping Complete');

  process.exit();
})();

