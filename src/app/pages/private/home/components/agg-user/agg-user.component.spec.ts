import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggUserComponent } from './agg-user.component';

describe('AggUserComponent', () => {
  let component: AggUserComponent;
  let fixture: ComponentFixture<AggUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
