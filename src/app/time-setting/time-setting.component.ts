import { Component } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';
import { timeSetting } from '../data-type';


import { faTrash, faTrashCan, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-time-setting',

  templateUrl: './time-setting.component.html',
  styleUrl: './time-setting.component.css',
})
export class TimeSettingComponent {
  data: undefined | timeSetting[];
  icon = faTrashCan;

  constructor(private attendance: AttendanceService) {}
  ngOnInit() {
    this.timeSetting();
  }
  timeSetting() {
    this.attendance.timeSettingData().subscribe((result) => {
      console.warn(result);
      this.data = result;
    });
  }
}
