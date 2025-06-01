import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerHistory } from './volunteer-history';

describe('VolunteerHistory', () => {
  let component: VolunteerHistory;
  let fixture: ComponentFixture<VolunteerHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
