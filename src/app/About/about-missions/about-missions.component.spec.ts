import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMissionsComponent } from './about-missions.component';

describe('AboutMissionsComponent', () => {
  let component: AboutMissionsComponent;
  let fixture: ComponentFixture<AboutMissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
