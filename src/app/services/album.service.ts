import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';
import { Album } from '../models/album';
import { AlbumRating } from '../models/album-rating';

const USER_ID = '3eWtaN2ITkecZCzL1Z0M';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  allGenres: string[];

  albumDB = this.store.collection<Album>('albums');
  albums$ = this.albumDB.valueChanges({ idField: 'id' });

  albumRatingDB = this.store.collection<AlbumRating>('album-ratings', (ref) =>
    ref.where('userId', '==', USER_ID)
  );
  albumRatings$ = this.albumRatingDB.valueChanges({ idField: 'id' });

  

  albumsWithRatings$ = combineLatest([this.albums$, this.albumRatings$]).pipe(
    map(([albums, albumRatings]) => {
      return albums
        .filter((a) => !a.hidden)
        .map((album) => {
          const rating = albumRatings.find((r) => r.albumId === album.id);
          return {
            ...album,
            rating: rating ? rating.rating : null,
          };
        });
    })
  );

  constructor(private store: AngularFirestore) {}

  updateAlbum(album: Album) {
    album.id = this.getAlbumId(album);

    if (!album.releaseDay) delete album.releaseDay;

    this.albumDB.doc(album.id).set(album);
  }

  hideAlbum(album: Album) {
    this.albumDB.doc(album.id).update({
      hidden: true,
    });
  }

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

  private getAlbumId(album: Album) {
    const formatStr = (str) => str.replace(/[\W_]+/g, "_").toUpperCase();

    return `${album.releaseYear}-${formatStr(album.artist)}-${formatStr(album.name)}`;
  }

  private getAlbumRatingId(userId: string, albumId: string) {
    return `${userId}-${albumId}`;
  }
}
