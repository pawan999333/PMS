import { Component } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';
import { employee } from '../data-type';

import { faTrash, faTrashCan, faEdit, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  // editIcon = faPenToSquare;
  employeeCode: undefined | employee[];
  constructor(private attendance: AttendanceService) {}
  ngOnInit() {
    this.employeeCodeData();
  }
  employeeCodeData() {
    this.attendance.employeeCode().subscribe((result) => {
      this.employeeCode = result;
      console.warn(this.employeeCode);
    });
  }
}
