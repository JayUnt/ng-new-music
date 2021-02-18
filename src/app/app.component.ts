import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAlbumComponent } from './add-album/add-album.component';

import { AlbumService } from './services/album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentUserId = '3eWtaN2ITkecZCzL1Z0M';
  hideRated = false;

  albumsWithRatings$ = this.albumService.albumsWithRatings$;l

  constructor(private albumService: AlbumService, private dialog: MatDialog) {}

  addAlbum(): void {
    this.dialog.open(AddAlbumComponent);
  }
}
