import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecomm-project';
  showLeftMenu: boolean = true;



  public minDate: Date = new Date('05/07/2017');
  public maxDate: Date = new Date('08/27/2017');
  public value: Date = new Date('05/16/2017');


  
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showLeftMenu = event.url !== '/';
      }
    });
  }
}
