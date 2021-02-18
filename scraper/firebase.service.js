const admin = require('firebase-admin');

const serviceAccount = require('./ng-new-music-42165d176ed1.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


const saveAlbums = async (albums) => {
  const albumDB = await db.collection('albums');

  const batch = db.batch();

  albums.forEach(album => {
    const albumRef = albumDB.doc(album.id);
    batch.set(albumRef, album);
  })
  
  // Commit the batch
  await batch.commit();
}

module.exports = saveAlbums;