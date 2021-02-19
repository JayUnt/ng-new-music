import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { tap } from 'rxjs/operators';
import { AddAlbumComponent } from './add-album/add-album.component';
import { Album } from './models/album';

import { AlbumService } from './services/album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentUserId = '3eWtaN2ITkecZCzL1Z0M';
  hideRated = false;

  allGenres = [];
  filterableGenres = [];
  showGenres = [];

  albumsWithRatings$ = this.albumService.albumsWithRatings$.pipe(
    tap(albums => {
      // Get only the genres arrays as an array
      const albumGenres = albums.map(a => a.genres);

      // Flatten genre arrays and get distinct values
      this.allGenres = [...new Set([].concat.apply([], albumGenres))];
      this.updateFilterableGenres();
    })
  )

  constructor(private albumService: AlbumService, private dialog: MatDialog) {}

  addAlbum(): void {
    this.dialog.open(AddAlbumComponent);
  }

  canShowAlbum(album: Album): boolean {
    if (this.hideRated && album.rating && !!album.rating.rating) {
      return false;
    }

    if (this.showGenres.length > 0 && !this.albumHasShownGenre(album)) {
      return false;
    }

    return true;
  }

  private albumHasShownGenre(album: Album) {
    return this.showGenres.filter(value => album.genres.includes(value)).length > 0;
  }

  addGenre(event: MatSelectChange) {
    if (!this.showGenres.includes(event.value)) {
      this.showGenres.push(event.value);
      this.showGenres.sort();
      this.updateFilterableGenres();
    }

    // Clear selection
    const matSelect: MatSelect = event.source;
    matSelect.writeValue(null);
  }

  removeGenre(genre) {
    this.showGenres = this.showGenres.filter(g => g !== genre);
    this.updateFilterableGenres();
  }

  updateFilterableGenres(){
    this.filterableGenres = this.allGenres.filter(g => !this.showGenres.includes(g));
  }
}
