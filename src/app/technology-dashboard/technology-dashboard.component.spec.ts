import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyDashboardComponent } from './technology-dashboard.component';

describe('TechnologyDashboardComponent', () => {
  let component: TechnologyDashboardComponent;
  let fixture: ComponentFixture<TechnologyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnologyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
