import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersEvent } from './volunteers-event';

describe('VolunteersEvent', () => {
  let component: VolunteersEvent;
  let fixture: ComponentFixture<VolunteersEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteersEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteersEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
