import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RateAlbumModalData } from '../models/rate-album-modal';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-rate-album',
  templateUrl: './rate-album.component.html',
  styleUrls: ['./rate-album.component.scss']
})
export class RateAlbumComponent {
  rating: number = this.data.album.rating;

  constructor(
    public dialogRef: MatDialogRef<RateAlbumComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RateAlbumModalData,
    private albumService: AlbumService
  ) {}

  submit(): void {
    this.data.album.rating = this.rating;
    this.albumService.updateAlbumRating(this.data.album, this.rating);
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }

  delete(): void {
    this.albumService.deleteAlbumRating(this.data.album);
    this.dialogRef.close();
  }

  hide(): void {
    this.albumService.hideAlbum(this.data.album);
    this.dialogRef.close();
  }
}
