import { Component } from '@angular/core';

import { AlbumService } from './services/album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentUserId = '3eWtaN2ITkecZCzL1Z0M';

  albumsWithRatings$ = this.albumService.albumsWithRatings$;

  constructor(private albumService: AlbumService) {}
}
