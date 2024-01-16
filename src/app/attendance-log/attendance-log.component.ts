import { Component } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-attendance-log',
  templateUrl: './attendance-log.component.html',
  styleUrl: './attendance-log.component.css'
})
export class AttendanceLogComponent {
 constructor(private attendance:AttendanceService){}
 ngOnInit9(){
  this.attendanceLogData();
 }
 attendanceLogData(){

 }
}
