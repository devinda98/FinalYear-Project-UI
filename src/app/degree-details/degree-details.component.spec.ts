import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeDetailsComponent } from './degree-details.component';

describe('DegreeDetailsComponent', () => {
  let component: DegreeDetailsComponent;
  let fixture: ComponentFixture<DegreeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
