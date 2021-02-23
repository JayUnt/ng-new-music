const admin = require('firebase-admin');

const serviceAccount = require('./keys/ng-new-music-1eb08f7cc976.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


const saveAlbums = async (albums) => {
  console.log('Saving Albums');
  const albumDB = await db.collection('albums');

  const batch = db.batch();

  albums.forEach(album => {
    const albumRef = albumDB.doc(album.id);
    
    batch.set(albumRef, album, {merge: true});
  })
  
  // Commit the batch
  await batch.commit();
  console.log('Saving complete');
}

module.exports = saveAlbums;