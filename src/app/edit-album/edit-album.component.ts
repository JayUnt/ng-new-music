import { Component, Inject, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Album } from '../models/album';
import { AlbumService } from '../services/album.service';
import { MatChipInputEvent } from '@angular/material/chips';
import { AlbumRating } from '../models/album-rating';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.scss'],
})
export class EditAlbumComponent implements OnInit {
  album: Album;
  rating: number;
  favoriteSong: string;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    public dialogRef: MatDialogRef<EditAlbumComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { album: Album },
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.album = { ...this.data.album };

    if (this.data.album.rating) {
      this.rating = this.data.album.rating.rating;
      this.favoriteSong = this.data.album.rating.favoriteSong;
    }
  }

  submit(): void {
    const a: Album = {
      id: this.album.id,
      name: this.album.name,
      artist: this.album.artist,
      releaseYear: this.album.releaseYear,
      releaseMonth: this.album.releaseMonth,
      releaseDay: this.album.releaseDay,
      genres: this.album.genres,
      spotifyLink: this.album.spotifyLink,
    };
    this.albumService.updateAlbum(a);

    const rating: AlbumRating = { rating: this.rating };
    if (!!this.favoriteSong) {
      rating.favoriteSong = this.favoriteSong;
    }
    this.albumService.updateAlbumRating(a, rating);
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
