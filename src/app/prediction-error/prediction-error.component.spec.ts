import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionErrorComponent } from './prediction-error.component';

describe('PredictionErrorComponent', () => {
  let component: PredictionErrorComponent;
  let fixture: ComponentFixture<PredictionErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictionErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
