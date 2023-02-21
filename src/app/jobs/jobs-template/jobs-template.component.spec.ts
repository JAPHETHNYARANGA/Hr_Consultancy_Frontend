import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsTemplateComponent } from './jobs-template.component';

describe('JobsTemplateComponent', () => {
  let component: JobsTemplateComponent;
  let fixture: ComponentFixture<JobsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
