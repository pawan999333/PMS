// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-holiday',

//   templateUrl: './holiday.component.html',
//   styleUrl: './holiday.component.css'
// })



import { Component, OnInit } from '@angular/core';


import { DatePipe } from '@angular/common';
import { attendance } from '../data-type';
import { AttendanceService } from '../services/attendance.service';







@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css'],

  providers: [DatePipe],
})
export class HolidayComponent implements OnInit {
  
  holidays: any;
  // currentYear: string;
  // presentYear: any;
  // modalHolidays: BsModalRef;
  // holidaysForm: FormGroup;
  // submitted = false;
  // id: string;
  // today = new Date();
  // message: string;
  // errorMessage: any;
  // holidaylist: any;
  // originalHolidaylist: any;
  // role: string;

 
  holidaysList: undefined|attendance[];


  constructor(
    
    private attendance:AttendanceService,
  ) // private modalService: BsModalService
  {

  }

  ngOnInit(): void {

    this.list();


  }
  list() {
    this.attendance.holidayList().subscribe((result) => {
      this.holidaysList = result;
      console.warn(result);
    });
  }
}


