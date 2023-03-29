import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoConcertsComponent } from './photo-concerts.component';

describe('PhotoConcertsComponent', () => {
  let component: PhotoConcertsComponent;
  let fixture: ComponentFixture<PhotoConcertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoConcertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoConcertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
