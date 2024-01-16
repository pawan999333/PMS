import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LeftMenuComponent } from './layout/left-menu/left-menu.component';
import { HolidayComponent } from './holiday/holiday.component';
import { LeaveComponent } from './leave/leave.component';
import { MyAttendanceSummaryComponent } from './my-attendance-summary/my-attendance-summary.component';
import { MySupportTicketComponent } from './my-support-ticket/my-support-ticket.component';
import { MyAttendanceComponent } from './my-attendance/my-attendance.component';
import { TimeSettingComponent } from './time-setting/time-setting.component';
import { AttendanceSummaryComponent } from './attendance-summary/attendance-summary.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { TechnologyDashboardComponent } from './technology-dashboard/technology-dashboard.component';

import { DxCalendarModule } from 'devextreme-angular';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { DxSchedulerModule } from 'devextreme-angular'; 




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,

    LoginComponent,
    ProfileComponent,
    LeftMenuComponent,
    HolidayComponent,
    LeaveComponent,
    MyAttendanceSummaryComponent,
    MySupportTicketComponent,
    MyAttendanceComponent,
    TimeSettingComponent,
    AttendanceSummaryComponent,
    AttendanceComponent,
    TechnologyDashboardComponent,
    EventCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    DxCalendarModule,
    DxSchedulerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
