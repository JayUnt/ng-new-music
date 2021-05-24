
// Crawler broke, created pdf of screen to see what was happening
//  They put captcha on the screen to make sure its a user and not a bot..
//  Have to find a different site to use, preferably an api

//  https://www.discogs.com/applications/edit/34552


const { BrowserHandler, waitForBrowser } = require("./browserHandler");
const { mergeAlbums } = require('../utils/album.utils');

const baseUrl = 'https://www.albumoftheyear.org/{YEAR}/releases/{MONTH}.php?genre={GENRE}';
const genres = [
  { id: 2, name: 'Alternative Rock' },
  // { id: 7, name: 'Rock' },
  // { id: 1, name: 'Indie Rock' },
  // { id: 28, name: 'Punk' },
  // { id: 69, name: 'Psychedelic Pop' },
  // { id: 5, name: 'Folk' }
];
const months = {
  1: 'january-01',
  2: 'february-02',
  3: 'march-03',
  4: 'april-04',
  5: 'may-05',
  6: 'june-06',
  7: 'july-07',
  8: 'august-08',
  9: 'september-09',
  10: 'october-10',
  11: 'november-11',
  12: 'december-12',
};

const getApiUrl = (year, month, genre) => {
  return baseUrl
    .replace('{YEAR}', year)
    .replace('{MONTH}', months[month])
    .replace('{GENRE}', genre.id)
};

const scraperObject = {
  browserHandler: null,
  async scrapePage(year, month, genre) {
    const url = getApiUrl(year, month, genre);

    await waitForBrowser(this.browserHandler);
    let page = await this.browserHandler.browser.newPage();
    await page.setDefaultNavigationTimeout(0);


    console.log(`Retrieving albums for ${month}/${year} - ${genre.name}`);
    console.log(`url: ${url}`);

    try {
      // Navigate to the selected page
      await page.goto(url, {
        waitUntil: 'networkidle0',
      });

      // await page.pdf({
      //   path: 'screenshot.pdf',
      // });

      // Wait for the required DOM to be rendered
      await page.waitForSelector('.facetContent', {
        visible: true,
      });


      // Get all of the albums
      const monthsAlbums = await page.$$eval('.albumBlock', (albumBlocks, genre) => {

        const albumData = albumBlocks.map(albumBlock => {
          // const siteScore = albumBlock.querySelector('.ratingRow .rating:last-child').textContent;

          const releaseDateStr = albumBlock.querySelector('.date').textContent;
          const d = new Date(`${releaseDateStr}, 2021`);
          return {
            artist: albumBlock.querySelector('.artistTitle').textContent.trim(),
            name: albumBlock.querySelector('.albumTitle').textContent.trim(),
            releaseYear: d.getFullYear(),
            releaseMonth: d.getMonth() + 1,
            releaseDay: d.getDay(),
            // siteScore, 
            genres: [genre.name],
          }
        });

        return albumData;
      }, genre);

      console.log(`Albums retrieved`);
      console.log('---------------------');

      return monthsAlbums;

    } catch (error) {
      console.log(`ERROR retrieving albums for ${month}/${year} - ${genre.name}`);
      console.log(error);

      return [];
    }
  },
  async scrapeAll() {
    this.browserHandler = new BrowserHandler();

    // const numMonths = 2;
    const numMonths = 1;
    let currDate = new Date();
    currDate.setDate(1);

    let albums = [];

    //albums.push(await this.scrapePage(currDate.getFullYear(), currDate.getMonth() + 1, genres[0]));

    let genre;
    for (let month = 1; month <= numMonths; month++) {
      for (let g = 0; g < genres.length; g++) {
        genre = genres[g];
        albums.push(await this.scrapePage(currDate.getFullYear(), currDate.getMonth() + 1, genre));
      }

      currDate.setMonth(currDate.getMonth() - 1);
    }

    albums = [].concat.apply([], albums);
    albums = mergeAlbums(albums);

    console.log(`All Albums Retrieved`);
    console.log(albums);

    await this.browserHandler.browser.close();

    return albums;
  }
}

module.exports = scraperObject;