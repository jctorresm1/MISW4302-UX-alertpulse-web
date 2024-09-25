import { Reminder } from './reminder'; 

export interface ReminderByDate {
    date: Date;
    remindersThisDay: Reminder[];
}