import { Component } from '@angular/core';
import {Router} from "@angular/router";

enum MENU {OSOBY, KNIHY, VYPOZICKY}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menu = MENU;

  constructor(private router: Router) {

  }

  otvorMenu(m: MENU) {
    if(m == MENU.OSOBY) {
      this.router.navigate(['/osoba']);
    }
    if (m == MENU.KNIHY) {
      this.router.navigate(['/kniha']);
    }
    if (m == MENU.VYPOZICKY) {
      this.router.navigate(['/vypozicky']);
    }
  }
}
