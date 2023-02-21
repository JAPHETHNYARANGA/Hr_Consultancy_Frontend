import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAssistComponent } from './business-assist.component';

describe('BusinessAssistComponent', () => {
  let component: BusinessAssistComponent;
  let fixture: ComponentFixture<BusinessAssistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessAssistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessAssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
