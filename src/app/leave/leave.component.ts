import { Component } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';
import { leave } from '../data-type';
import { Router } from '@angular/router';
import {faTrash,faEdit, faCalendarDays} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.css',
})
export class LeaveComponent {
  leaveList: undefined | leave[];
  icon = faCalendarDays;


  constructor(private attendance: AttendanceService, private router:Router) {}
  ngOnInit(): void {
    this.list();
  }

  list() {
    this.attendance.leaveList().subscribe((result) => {
      this.leaveList = result;
      console.warn(result);
    });
  }

  navigateToEventCalendar(): void {
    this.router.navigate(['/event-calendar']);
  }
}
