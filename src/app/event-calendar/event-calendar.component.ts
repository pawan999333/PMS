import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css']
})
export class EventCalendarComponent implements AfterViewInit {
  @ViewChild('myCalendar') myCalendar: any; 
  date: string | null;
  constructor(){
    this.date= "13/01/2024";
  }
  minDate: Date = new Date(2024, 1, 1);
  maxDate: Date = new Date(2024, 1, 31);

  ngAfterViewInit() {
    this.myCalendar.instance.option('value', this.date);
  }
}
