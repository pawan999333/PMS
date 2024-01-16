import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LeftMenuComponent } from './layout/left-menu/left-menu.component';
import { HolidayComponent } from './holiday/holiday.component';
import { LeaveComponent } from './leave/leave.component';
import { MyAttendanceSummaryComponent } from './my-attendance-summary/my-attendance-summary.component';
import { MySupportTicketComponent } from './my-support-ticket/my-support-ticket.component';
import { MyAttendanceComponent } from './my-attendance/my-attendance.component';
import { TimeSettingComponent } from './time-setting/time-setting.component';
import { EmployeeComponent } from './employee/employee.component';
import { AttendanceSummaryComponent } from './attendance-summary/attendance-summary.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LeftMenuComponent,
  // },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: MySupportTicketComponent,
  },
  {
    path: 'my-leave',
    component: LeaveComponent,
  },
  {
    path: 'my-attendance-summary',
    component: MyAttendanceSummaryComponent,
  },
  {
    path: 'time-setting',
    component: TimeSettingComponent,
    // canActivate: [AuthGuard],
  },

  {
    path: 'profile',
    component: ProfileComponent,
  },

  {
    path: 'holiday',
    component: HolidayComponent,
  },

  {
    path: 'my-attendance',
    component: MyAttendanceComponent,
  },
  {
    path: 'attendance-summary',
    component: AttendanceSummaryComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'attandance',
    component: AttendanceComponent,
  },
  {
    path: 'employee-code',
    component: EmployeeComponent,
  },
  {
    path: 'event-calendar',
    component: EventCalendarComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

