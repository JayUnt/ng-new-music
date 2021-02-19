import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Album } from '../models/album';
import { EditAlbumComponent } from '../edit-album/edit-album.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  @Input() album: Album;
  @Output() edit = new EventEmitter<Album>();

  constructor(private dialog: MatDialog) {}

  rateAlbum(): void {
    this.dialog.open(EditAlbumComponent, {
      data: {album: this.album },      
    });    
  }
}
