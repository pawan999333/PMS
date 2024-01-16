import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAttendanceSummaryComponent } from './my-attendance-summary.component';

describe('MyAttendanceSummaryComponent', () => {
  let component: MyAttendanceSummaryComponent;
  let fixture: ComponentFixture<MyAttendanceSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAttendanceSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyAttendanceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
