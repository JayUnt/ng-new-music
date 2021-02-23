import { Component, OnChanges, SimpleChanges } from '@angular/core';
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
  stringFilter;
  hideRated = false;

  allGenres = [];
  filterableGenres = [];
  showGenres = [];
  albumId: string;

  albumsWithRatings$ = this.albumService.albumsWithRatings$.pipe(
    tap((albums) => {
      // Get only the genres arrays as an array
      const albumGenres = albums.map((a) => a.genres);

      // Flatten genre arrays and get distinct values
      this.allGenres = [...new Set([].concat.apply([], albumGenres))];
      this.updateFilterableGenres();
    })
  );

  constructor(private albumService: AlbumService, private dialog: MatDialog) {}

  filterString(event) {
    this.stringFilter = event.target.value;
  }

  addAlbum(): void {
    this.dialog.open(AddAlbumComponent);
  }

  canShowAlbum(album: Album): boolean {
    // if albumId is set, ignore all other filters
    if (this.albumId) {
      return album.id === this.albumId;
    }

    if (this.hideRated && album.rating && !!album.rating.rating) {
      return false;
    }

    if (this.showGenres.length > 0 && !this.albumHasShownGenre(album)) {
      return false;
    }

    if (!!this.stringFilter && !this.albumStartsWithStringFilter(album)) {
      return false;
    }

    return true;
  }

  private albumHasShownGenre(album: Album) {
    return (
      this.showGenres.filter((value) => album.genres.includes(value)).length > 0
    );
  }

  private albumStartsWithStringFilter(album: Album) {
    const strFilter = this.stringFilter.toLowerCase();
    return (
      album.name.toLowerCase().startsWith(strFilter) ||
      album.artist.toLowerCase().startsWith(this.stringFilter)
    );
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
    this.showGenres = this.showGenres.filter((g) => g !== genre);
    this.updateFilterableGenres();
  }

  updateFilterableGenres() {
    this.filterableGenres = this.allGenres.filter(
      (g) => !this.showGenres.includes(g)
    );
  }

  toggleRandomUnratedAlbum({ checked }) {
    if (checked) {
      this.setRandomUnratedAlbum();
    } else {
      this.albumId = null;
    }
  }

  setRandomUnratedAlbum() {
    const albums = this.albumService.getLatestAlbums();
    const unrated = albums.filter((a) => !a.rating);
    const random = unrated[Math.floor(Math.random() * unrated.length)];
    this.albumId = random.id;
  }
}
