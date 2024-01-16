import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css']
})
export class EventCalendarComponent {
  
  federalHolidays = [
    this.changeYear(new Date('2024-01-01T00:00:00.000Z')),
    this.changeYear(new Date('2024-01-02T00:00:00.000Z')),
  ];

  federalHolidays2 = [
    this.changeYear(new Date('2024-01-03T00:00:00.000Z')),
    this.changeYear(new Date('2024-01-05T00:00:00.000Z')),
  ];

  getCellCssClass(date: any, view: any) {
    let cssClass = '';
    let cellText = '';

    this.federalHolidays.forEach((item) => {
      if (date !== undefined) {
        if (this.isSameDate(date, item) && view !== 'year') {
          cssClass = 'pastUnapproved';
          cellText = 'User3';
        }
      }
    });

    this.federalHolidays2.forEach((item) => {
      if (date !== undefined) {
        if (this.isSameDate(date, item) && view !== 'year') {
          cssClass = 'futureApprovedLeaves';
          cellText = 'future Approved Leaves';
        }
      }
    });

    return cssClass;
  }

  private isSameDate(date1: Date, date2: Date): boolean {
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth();
  }

  private changeYear(date: Date): Date {
    return date;
  }

}
