import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { Reminder } from '../../core/models/reminder';
import { ReminderService } from '../../core/services/reminder.service';
import { ReminderByDate } from '../../core/models/reminderByDate';
import { ReminderCardComponent } from "../reminder-card/reminder-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-week',
  standalone: true,
  imports: [MaterialModule, ReminderCardComponent, CommonModule],
  templateUrl: './week.component.html',
  styleUrl: './week.component.scss'
})
export class WeekComponent {
  reminderByDate: ReminderByDate[] = [];

  constructor(private reminderService: ReminderService) {}

  ngOnInit(): void {
    // Fetch reminders from the service
    this.reminderByDate = this.reminderService.getThisWeekReminders();
  }
}
