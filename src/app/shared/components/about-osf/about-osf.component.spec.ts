import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOSFComponent } from './about-osf.component';

describe('AboutOSFComponent', () => {
  let component: AboutOSFComponent;
  let fixture: ComponentFixture<AboutOSFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutOSFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutOSFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
