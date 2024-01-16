import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { allAttandance, attendance, attendanceSummary, dashboard, employee, leave, myAttendance, myAttendanceList, profile, timeSetting } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  constructor(private http: HttpClient) {}

  holidayList() {
    return this.http.get<attendance[]>('http://localhost:3000/holiday');
  }

  leaveList() {
    return this.http.get<leave[]>('http://localhost:3000/my-leave');
  }

  myAttendanceListData(){
        return this.http.get<myAttendanceList[]>(
          'http://localhost:3000/my-attendance-summary'
        );

  }

  myAttendace(){
     return this.http.get<myAttendance[]>(
       'http://localhost:3000/my-attendance'
     );
  }


  mySupportTicket(){
    return this.http.get<dashboard[]>(
      'http://localhost:3000/dashboard'
    );
  }

  data(){
    return this.http.get<profile>(
      'http://localhost:3000/dashboard'
    )
  }

  timeSettingData(){
    return this.http.get<timeSetting[]>('http://localhost:3000/time-setting');
  }


  employeeCode(){
        return this.http.get<employee[]>(
          'http://localhost:3000/employee-code'
        );

  }

  attandance(){
    return this.http.get<allAttandance[]>('http://localhost:3000/attandance');
  }



  attendanceSummary(){
        return this.http.get<attendanceSummary[]>(
          'http://localhost:3000/attendance-summary'
        );

  }

  leaveData(){
    return this.http.get('http://localhost:3000/')
  }

}
