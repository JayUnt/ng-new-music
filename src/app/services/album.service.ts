import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Album } from '../models/album';
import { AlbumRating } from '../models/album-rating';

const USER_ID = '3eWtaN2ITkecZCzL1Z0M';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  albumDB = this.store.collection<Album>('albums');
  albums$ = this.albumDB.valueChanges({ idField: 'id' });

  albumRatingDB = this.store.collection<AlbumRating>('album-ratings', (ref) =>
    ref.where('userId', '==', USER_ID)
  );
  albumRatings$ = this.albumRatingDB.valueChanges({ idField: 'id' });

  constructor(private store: AngularFirestore) {}

  updateAlbumRating(album: Album, rating: number) {
    const albumRatingId = this.getAlbumRatingId(USER_ID, album.id);

    this.albumRatingDB.doc(albumRatingId).set({
      userId: USER_ID,
      albumId: album.id,
      rating,
    });
  }

  deleteAlbumRating(album: Album) {
    const albumRatingId = this.getAlbumRatingId(USER_ID, album.id);
    this.albumRatingDB.doc(albumRatingId).delete();
  }

  private getAlbumRatingId(userId: string, albumId: string) {
    return `${userId}-${albumId.toUpperCase()}`;
  }
}
