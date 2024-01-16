import { Component, HostListener } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-left-menu',
  // standalone: true,
  // imports: [],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.css',
})
export class LeftMenuComponent {
  isClicked: boolean = false;

  // handleClick() {
  //   this.isClicked = !this.isClicked;
  // }
  // public isScreenLarge = window.innerWidth >= 1.5 * window.screen.width;

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event): void {
  //   this.isScreenLarge = window.innerWidth >= 1.5 * window.screen.width;
  // }
}
