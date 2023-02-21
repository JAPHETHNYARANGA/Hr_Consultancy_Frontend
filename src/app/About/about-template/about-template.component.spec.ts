import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTemplateComponent } from './about-template.component';

describe('AboutTemplateComponent', () => {
  let component: AboutTemplateComponent;
  let fixture: ComponentFixture<AboutTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
