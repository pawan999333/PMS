import { Component } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';
import { profile } from '../data-type';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  data:undefined|profile;
  constructor(private attendance:AttendanceService){}
  ngOnInit(){
    this.profileData();
  }



  profileData(){
    this.attendance.data().subscribe((result)=>{
      console.warn(result);
    })

  }
}



