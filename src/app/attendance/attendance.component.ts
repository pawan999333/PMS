import { Component } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';
import { allAttandance } from '../data-type';

@Component({
  selector: 'app-attendance',
 
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css',
})
export class AttendanceComponent {
  attendanceList: undefined | allAttandance[];
  constructor(private attendance: AttendanceService) {}
  ngOnInit() {
    this.atttendanceSummaryList();
  }
  atttendanceSummaryList() {
    this.attendance.attandance().subscribe((result) => {
      this.attendanceList= result;
      console.warn(this.attendanceList);
    });
  }
}
