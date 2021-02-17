import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RateAlbumComponent } from '../rate-album/rate-album.component';
import { Album } from '../models/album';
import { RateAlbumModalResult } from '../models/rate-album-modal';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  @Input() album: Album;
  @Output() edit = new EventEmitter<Album>();

  constructor(private dialog: MatDialog, private store: AngularFirestore) {}

  rateAlbum(): void {
    this.dialog.open(RateAlbumComponent, {
      data: { album: this.album },      
    });    
  }
}
