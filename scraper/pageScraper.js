const baseUrl = 'https://www.albumoftheyear.org/{YEAR}/releases/{MONTH}.php?genre={GENRE}';
const genres = [
  { id: 2, name: 'Alternative Rock' },
  { id: 7, name: 'Rock' },
  { id: 1, name: 'Indie Rock' },
  { id: 28, name: 'Punk' },
  { id: 69, name: 'Psychedelic Pop' },
  { id: 5, name: 'Folk' }
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



const getAlbumId = (year, artist, name) => {
  const formatStr = (str) => str.replace(/[\W_]+/g, "_").toUpperCase();

  return `${year}-${formatStr(artist)}-${formatStr(name)}`;
};

const mergeAlbums = (albums) => {

  const newAlbums = [];
  const map = new Map();
  for (const album of albums) {
    const id = getAlbumId(album.releaseYear, album.artist, album.name);
    if (!map.has(id)) {
      map.set(id, true);    // set any value to Map
      newAlbums.push({
        ...album,
        id: id
      });
    } else {
      newAlbums.find(a => a.id === id).genres.push(...album.genres);
    }
  }

  return newAlbums;
}

const scraperObject = {

  async scrapePage(browser, year, month, genre) {
    return new Promise(async (resolve, reject) => {
      const url = getApiUrl(year, month, genre);

      let page = await browser.newPage();
      console.log(`Navigating to ${url}...`);

      // Navigate to the selected page
      await page.goto(url);

      // Wait for the required DOM to be rendered
      await page.waitForSelector('.facetContent');

      // Get all of the albums
      const albums = await page.$$eval('.albumBlock', (albumBlocks, genre) => {

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

      resolve(albums);
    });
  },
  async scraper(browser) {
    const scrapers = [];

    //scrapers.push(this.scrapePage(browser, 2021, 2, genres[0]));

    const numMonths = 2;
    let currDate = new Date();
    currDate.setDate(1);

    for (let c = 1; c <= numMonths; c++) {
      genres.forEach(genre => {
        scrapers.push(this.scrapePage(browser, currDate.getFullYear(), currDate.getMonth() + 1, genre));
      })

      currDate.setMonth(currDate.getMonth() - 1);
    }

    let albums = await Promise.all(scrapers);
    albums = [].concat.apply([], albums);
    albums = mergeAlbums(albums);

    await browser.close();
    return albums;
  }
}

module.exports = scraperObject;