import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/auth/signup', pathMatch: 'full' },  // Redirect default route to login
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes')
    .then(m => m.authRoutes)  // Lazy load Auth module
  },
  {
    path: 'reminders',
    loadChildren: () => import('./reminders/reminders.routes')
    .then(m => m.remindersRoutes)  // Lazy load Reminders module
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
    .then(m => m.AdminModule)  // Lazy load Admin module
  },
  { path: '**', redirectTo: '/auth/login' }  // Wildcard route to handle invalid URLs
];
