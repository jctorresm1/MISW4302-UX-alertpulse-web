import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { Router } from '@angular/router';
import { Reminder } from '../../core/models/reminder';
import { ReminderService } from '../../core/services/reminder.service';
import { CommonModule } from '@angular/common';
import { ReminderCardComponent } from '../reminder-card/reminder-card.component';

@Component({
  selector: 'app-share',
  standalone: true,
  imports: [MaterialModule, CommonModule, ReminderCardComponent],
  templateUrl: './share.component.html',
  styleUrl: './share.component.scss'
})
export class ShareComponent {
  reminders: Reminder[] = [];

  constructor(private reminderService: ReminderService, private router: Router) {
  }


  ngOnInit(): void {
    // Fetch reminders from the service
    this.reminders = this.reminderService.getTodayReminders();
  }
}
