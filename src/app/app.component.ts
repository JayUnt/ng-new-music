import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { AlbumService } from './services/album.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentUserId = '3eWtaN2ITkecZCzL1Z0M';

  albumsWithRatings$ = combineLatest([
    this.albumService.albums$,
    this.albumService.albumRatings$
  ]).pipe(
    map(([albums, albumRatings]) => {
      return albums.map((album) => {
        const rating = albumRatings.find((r) => r.albumId === album.id);
        return {
          ...album,
          rating: rating ? rating.rating : null,
        };
      });
    })
  );

  constructor(
    private albumService: AlbumService,
  ) {}
}
