import { Component } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';
import { leave, myAttendanceList } from '../data-type';

@Component({
  selector: 'app-my-attendance-summary',
  templateUrl: './my-attendance-summary.component.html',
  styleUrl: './my-attendance-summary.component.css',
})
export class MyAttendanceSummaryComponent {
  myAttendanceListData: undefined | myAttendanceList[];
  constructor(private attendance: AttendanceService) {}
  ngOnInit() {
    this.myAttendanceList();
  }
  myAttendanceList() {
    this.attendance.myAttendanceListData().subscribe((result) => {
      this.myAttendanceListData = result;
      console.warn(this.myAttendanceListData);
    });
  }
}
