import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateComponentComponent } from './activate-component.component';

describe('ActivateComponentComponent', () => {
  let component: ActivateComponentComponent;
  let fixture: ComponentFixture<ActivateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
