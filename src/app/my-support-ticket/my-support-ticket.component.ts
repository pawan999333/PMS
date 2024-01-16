import { Component } from '@angular/core';
import { dashboard } from '../data-type';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-my-support-ticket',

  templateUrl: './my-support-ticket.component.html',
  styleUrl: './my-support-ticket.component.css',
})
export class MySupportTicketComponent {
  mySupportTicketData: undefined | dashboard[];
  ngOnInit() {
    this.mySupportTicket();
  }
  constructor(private attendance:AttendanceService) {}
  mySupportTicket() {
    this.attendance.mySupportTicket().subscribe((result) => {
      this.mySupportTicketData = result;
      console.warn(this.mySupportTicketData);
    });
  }
}
