import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-reminder-navigation',
  standalone: true,
  imports: [
    MaterialModule,
    MatListModule,
    MatDividerModule,
    MatBadgeModule,
    RouterModule
  ],
  providers: [MatSidenavModule],
  templateUrl: './reminder-navigation.component.html',
  styleUrls: ['./reminder-navigation.component.scss']
})
export class ReminderNavigationComponent {}
