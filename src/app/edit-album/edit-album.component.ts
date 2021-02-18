import { Component, Inject, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Album } from '../models/album';
import { AlbumService } from '../services/album.service';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.scss']
})
export class EditAlbumComponent implements OnInit {
  album: Album;
  rating: number;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    public dialogRef: MatDialogRef<EditAlbumComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { album: Album }, 
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.album = { ...this.data.album };
    this.rating = this.data.album.rating;
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
    };
    this.albumService.updateAlbum(a);
    this.albumService.updateAlbumRating(a, this.rating);
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
