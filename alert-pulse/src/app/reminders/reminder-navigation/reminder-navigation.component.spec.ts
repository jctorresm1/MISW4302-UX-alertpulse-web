import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderNavigationComponent } from './reminder-navigation.component';

describe('ReminderNavigationComponent', () => {
  let component: ReminderNavigationComponent;
  let fixture: ComponentFixture<ReminderNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReminderNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReminderNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
