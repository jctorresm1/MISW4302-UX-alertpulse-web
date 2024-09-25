import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../../core/services/reminder.service';
import { Reminder } from '../../core/models/reminder';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { ReminderCardComponent } from '../reminder-card/reminder-card.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-today',  
  standalone: true,
  imports: [MaterialModule, CommonModule, ReminderCardComponent],
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],   
})
export class TodayComponent implements OnInit {
  reminders: Reminder[] = [];

  constructor(private reminderService: ReminderService, private router: Router) {
  }

  navigateToAddNew() {
    this.router.navigate(['/reminders/add']);  
  }

  ngOnInit(): void {
    // Fetch reminders from the service
    this.reminders = this.reminderService.getTodayReminders();
  }
}
