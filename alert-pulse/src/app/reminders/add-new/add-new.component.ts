import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReminderService } from '../../core/services/reminder.service';
import { Reminder } from '../../core/models/reminder';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-add-new',
  standalone: true,
  imports: [MaterialModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  reminderForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reminderService: ReminderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.reminderForm = this.fb.group({
      reminderText: ['', [Validators.required, Validators.maxLength(100)]],
      date: ['', Validators.required],
      hour: ['', [Validators.required, this.validateTimeFormat]],
      duration: ['', Validators.required],
      selectedTone: ['', Validators.required],
      shared: [false]
    });
  }

  // Custom validator to ensure time is in correct hh:mm AM/PM format
  validateTimeFormat(control: any): { [key: string]: any } | null {
    const timeRegex = /^(0?[1-9]|1[012]):[0-5][0-9] ?([AaPp][Mm])$/;
    return timeRegex.test(control.value) ? null : { invalidTime: true };
  }

  onSave() {
    if (this.reminderForm.valid) {
      const newReminder: Reminder = {
        ...this.reminderForm.value,
        completed: false 
      };

      newReminder.date = new Date(this.reminderForm.value.date).toISOString().split('T')[0];
      newReminder.imageUrl = 'bell.png';

      this.reminderService.addReminder(newReminder);

      // Redirect to reminders/today
      this.router.navigate(['/reminders/today']);
    }
  }

  onCancel() {
    this.router.navigate(['/reminders/today']);
  }
}
