import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateAlbumComponent } from './rate-album.component';

describe('RateAlbumComponent', () => {
  let component: RateAlbumComponent;
  let fixture: ComponentFixture<RateAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
