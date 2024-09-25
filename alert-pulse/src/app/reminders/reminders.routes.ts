import { Routes } from '@angular/router';
import { ReminderNavigationComponent } from './reminder-navigation/reminder-navigation.component';
import { TodayComponent } from './today/today.component';
import { WeekComponent } from './week/week.component';
import { ShareComponent } from './share/share.component';
import { AddNewComponent } from './add-new/add-new.component';

export const remindersRoutes: Routes = [
  {
    path: '',
    component: ReminderNavigationComponent,  // Main reminders component with sidenav
    children: [
        { path: 'add', component: AddNewComponent },   // Loads "Add" reminders
      { path: 'today', component: TodayComponent },   // Loads "Today" reminders
      { path: 'week', component: WeekComponent },     // Loads "This Week" reminders
      { path: 'shared', component: ShareComponent },     // Loads "This Week" reminders
      { path: '', redirectTo: 'today', pathMatch: 'full' }  // Default route for reminders
    ]
  }
];
