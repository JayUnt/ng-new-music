import { Component } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatDialogRef } from '@angular/material/dialog';
import { Album } from '../models/album';
import { AlbumRating } from '../models/album-rating';
import { AlbumService } from '../services/album.service';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.scss'],
})
export class AddAlbumComponent {
  album: Partial<Album> = {};
  rating: number;
  favoriteSong: string;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    public dialogRef: MatDialogRef<AddAlbumComponent>,
    private albumService: AlbumService
  ) {}

  submit(): void {
    const album: Album = {
      id: this.album.id,
      name: this.album.name,
      artist: this.album.artist,
      releaseYear: this.album.releaseYear,
      releaseMonth: this.album.releaseMonth,
      releaseDay: this.album.releaseDay,
      genres: this.album.genres,
      spotifyLink: this.album.spotifyLink || '',
    };
    this.albumService.updateAlbum(album);

    const albumRating: AlbumRating = {
      rating: this.rating,
      favoriteSong: this.favoriteSong,
    };
    this.albumService.updateAlbumRating(album, albumRating);
    
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }

  addGenre(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.album.genres = this.album.genres || [];
      this.album.genres.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeGenre(genre: string): void {
    const index = this.album.genres.indexOf(genre);

    if (index >= 0) {
      this.album.genres.splice(index, 1);
    }
  }
}
