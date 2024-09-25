import { Component, Input } from '@angular/core';
import { Reminder } from '../../core/models/reminder';  // Import the Reminder model
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reminder-card',
  standalone: true,
  imports: [MaterialModule, CommonModule, FormsModule],
  templateUrl: './reminder-card.component.html',
  styleUrls: ['./reminder-card.component.scss'],
})
export class ReminderCardComponent {
  @Input() reminder: Reminder | undefined;  
  @Input() shareable: boolean = false;
  getCardBackground() {
    return this.reminder && this.reminder.completed
      ? 'linear-gradient(transparent 1%, #cfe5ff 35%, #0d1d2a)'
      : 'linear-gradient(transparent 1%, #e0e7e9 35%, #0d1d2a)';
  }

 
  getTaskTextDecoration() {
    return this.reminder && this.reminder.completed ? 'line-through' : 'none';
  }
}
