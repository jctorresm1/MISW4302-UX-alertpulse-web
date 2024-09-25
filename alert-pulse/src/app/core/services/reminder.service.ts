import { Injectable } from '@angular/core';
import { Reminder } from '../models/reminder';
import { ReminderByDate } from '../models/reminderByDate';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
    private reminders: Reminder[] = [];

  constructor() { 
    this.reminders = [
        {
            imageUrl: 'house-plants64.png',
            reminderText: 'Regar las plantas',
            hour: '10:00 AM',
            date: new Date().toISOString().split('T')[0],
            completed: false,
            duration: '',
            selectedTone: '',
            shared: false
        },
        {
            imageUrl: 'buy.png',
            reminderText: 'Comprar víveres',
            hour: '12:00 PM',
            date: new Date().toISOString().split('T')[0],
            completed: true,
            duration: '',
            selectedTone: '',
            shared: false
        },
        {
            imageUrl: 'medic.png',
            reminderText: 'Medir la presión',
            hour: '02:00 PM',
            date: new Date().toISOString().split('T')[0],
            completed: false,
            duration: '',
            selectedTone: '',
            shared: false
        }
      ];
  }

  addReminder(reminder: Reminder): void {
    this.reminders.push(reminder);
  }

  getTodayReminders(): Reminder[] {
    const today = new Date().toISOString().split('T')[0];
    return this.reminders.filter(reminder => reminder.date === today); 
  }

  getThisWeekReminders(): ReminderByDate[] {

    const today = new Date();
    const weekStart = new Date(today.setDate(today.getDate() - today.getDay()));
    const weekEnd = new Date(today.setDate(weekStart.getDate() + 6));
    const thisWeekReminder = this.reminders.filter(reminder => {
      const reminderDate = new Date(reminder.date);
      return reminderDate >= weekStart && reminderDate <= weekEnd;
    });

    var reminders : ReminderByDate[] = [];

    thisWeekReminder.forEach(reminder => {
        reminders.push({ date: new Date(reminder.date), remindersThisDay: [reminder] });
    });

    return reminders;
    
  }
}
