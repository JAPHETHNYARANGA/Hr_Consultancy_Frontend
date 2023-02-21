import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesTopComponent } from './services-top.component';

describe('ServicesTopComponent', () => {
  let component: ServicesTopComponent;
  let fixture: ComponentFixture<ServicesTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
