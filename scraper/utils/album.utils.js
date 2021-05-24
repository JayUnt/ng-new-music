
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


module.exports = {
  getAlbumId,
  mergeAlbums
}