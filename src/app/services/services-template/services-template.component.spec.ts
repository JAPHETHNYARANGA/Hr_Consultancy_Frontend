import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesTemplateComponent } from './services-template.component';

describe('ServicesTemplateComponent', () => {
  let component: ServicesTemplateComponent;
  let fixture: ComponentFixture<ServicesTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
