import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySupportTicketComponent } from './my-support-ticket.component';

describe('MySupportTicketComponent', () => {
  let component: MySupportTicketComponent;
  let fixture: ComponentFixture<MySupportTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySupportTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MySupportTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
