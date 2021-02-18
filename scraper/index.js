const browserObject = require('./browser');
const scraperController = require('./pageController');
const firebaseService = require('./firebase.service');

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

(async() => {
  // Pass the browser instance to the scraper controller
  const albums = await scraperController(browserInstance);

  console.log('albums');
  console.log(JSON.stringify(albums));

  await firebaseService(albums);
})();

