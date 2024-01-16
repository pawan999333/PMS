import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css']
})
export class EventCalendarComponent {

  federalHolidays = [
    { startDate: this.changeYear(new Date('2024-01-01T00:00:00.000Z')), endDate: this.changeYear(new Date('2024-01-02T23:59:59.999Z')), colorClass: 'pastUnapproved', cellText: 'User3' },
    { startDate: this.changeYear(new Date('2024-01-03T00:00:00.000Z')), endDate: this.changeYear(new Date('2024-01-05T23:59:59.999Z')), colorClass: 'futureUnapprovedLeaves', cellText: 'Pawan' },
    { startDate: this.changeYear(new Date('2024-01-09T00:00:00.000Z')), endDate: this.changeYear(new Date('2024-01-10T23:59:59.999Z')), colorClass: 'rejected', cellText: 'Pawan' },
    { startDate: this.changeYear(new Date('2024-01-21T00:00:00.000Z')), endDate: this.changeYear(new Date('2024-01-23T23:59:59.999Z')), colorClass: 'futureApprovedLeaves', cellText: 'User1' },
    { startDate: this.changeYear(new Date('2024-01-30T00:00:00.000Z')), endDate: this.changeYear(new Date('2024-01-31T00:00:00.000Z')), colorClass: 'pastApprovedLeaves', cellText: 'User9' },


  ];

  getCellCssClass(date: any, view: any) {
    let cssClass = '';

    this.federalHolidays.forEach((item) => {
      if (date !== undefined && this.isDateInRange(date, item.startDate, item.endDate) && view !== 'year') {
        cssClass = item.colorClass;
      }
    });

    return cssClass;
  }

  getCellText(date: any): string {
    let cellText = '';

    this.federalHolidays.forEach((item) => {
      if (date !== undefined && this.isDateInRange(date, item.startDate, item.endDate)) {
        cellText = item.cellText;
      }
    });

    return cellText;
  }

  private isDateInRange(date: Date, startDate: Date, endDate: Date): boolean {
    return date.getTime() >= startDate.getTime() && date.getTime() <= endDate.getTime();
  }

  private changeYear(date: Date): Date {
    return date;
  }

}
