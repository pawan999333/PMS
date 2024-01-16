import { Component } from '@angular/core';
import { attendanceSummary } from '../data-type';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-attendance-summary',

  templateUrl: './attendance-summary.component.html',
  styleUrl: './attendance-summary.component.css',
})
export class AttendanceSummaryComponent {
  attendanceSummary: undefined | attendanceSummary[];
  constructor(private attendance: AttendanceService) {}
  ngOnInit() {
    this.atttendanceSummaryList();
  }
  atttendanceSummaryList() {
    this.attendance.attendanceSummary().subscribe((result) => {
      this.attendanceSummary = result;
      console.warn(this.attendanceSummary);
    });
  }
}
