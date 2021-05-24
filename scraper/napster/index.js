const axios = require('axios');
require('dotenv').config();
var isAfter = require('date-fns/isAfter')

const firebaseService = require('./utils/firebase.service');
// const { getAlbumId } = require('./utils/album.utils');

const getAlbumId = (year, artist, name) => {
  const formatStr = (str) => str.replace(/[\W_]+/g, "_").toUpperCase();

  return `${year}-${formatStr(artist)}-${formatStr(name)}`;
};

const baseApiUrl = 'https://api.napster.com/';
const apiPaths = {
  newReleaseByGenre: (genreIds) => `v2.2/genres/${genreIds}/albums/new`,
  genreDetail: (genreIds) => `/v2.2/genres/${genreIds}`
};

const allGenres = require('./responses/reduced-genre-details');
const allGenreIds = allGenres.map(g => g.id);


// start date is the first day of last month
const startDate = new Date();
startDate.setDate(1);
startDate.setMonth(startDate.getMonth() - 1);


const buildUrl = (path) => {
  return `${baseApiUrl}${path}?apikey=${process.env.API_KEY}&limit=200`;
}

const arrayToString = (ids) => Object.values(ids).join(',');

function formatAlbums(albums, genreDetails) {
  return albums.map(album => {
    const d = new Date(album.released);
    return {
      id: getAlbumId(d.getFullYear(), album.artistName, album.name),
      artist: album.artistName,
      name: album.name,
      releaseYear: d.getFullYear(),
      releaseMonth: d.getMonth() + 1,
      releaseDay: d.getDay(),
      genres: getGenres(album, genreDetails),
      napsterUrl: album.href,
    }
  });
}

function getGenres(album, genreDetails) {
  return genreDetails.filter(g => album.links.genres.ids.includes(g.id)).map(g => g.name);
}

function isAfterStartDate(album) {
  return isAfter(new Date(album.released), startDate);
}

const main = () => {
  const newReleasesByGenreUrl = buildUrl(apiPaths.newReleaseByGenre(arrayToString(allGenreIds)));
  // console.log(newReleasesByGenreUrl);

  axios.get(newReleasesByGenreUrl)
    .then(response => {
      // console.log(response.data.albums.length);
      // console.log([...new Set(response.data.albums.map(a => a.released))]);

      let albums = response.data.albums.filter(a => !a.isSingle);
      // remove all singles
      albums = albums.filter(a => !a.isSingle);
      // remove all that are before the start date
      albums = albums.filter(a => isAfterStartDate(a));

      // console.log(albums);


      const returnedGenreIds = [...new Set(albums.map(a => a.links.genres.ids).flat())].sort();
      const genreDetailUrl = buildUrl(apiPaths.genreDetail(arrayToString(returnedGenreIds)));
      axios.get(genreDetailUrl)
        .then(async response => {
          const genreDetails = response.data.genres;
          const formattedAlbums = formatAlbums(albums, genreDetails);
          console.log(formattedAlbums);
          // console.log(`adding/updating ${formattedAlbums.length} albums`);
          await firebaseService(formattedAlbums);
        })
        .catch(error => {
          console.log(error);
        });

    })
    .catch(error => {
      console.log(error);
    });
}

main();