import { Component } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';
import { myAttendance } from '../data-type';

@Component({
  selector: 'app-my-attendance',
  templateUrl: './my-attendance.component.html',
  styleUrl: './my-attendance.component.css'
})


export class MyAttendanceComponent {
  
  
  attendanceList:undefined|myAttendance[];
  constructor(private attendance: AttendanceService){};
  ngOnInit(){
    this.myAttendanceList();
  }

  myAttendanceList(){
    this.attendance.myAttendace().subscribe((result)=>{
      this.attendanceList=result;
      console.warn(this.attendanceList);
    })
  }

}
