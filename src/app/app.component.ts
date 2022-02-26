import { Component } from '@angular/core';
enum MENU {USERS, BOOKS, BORROWINGS}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: any = [];
  book = {id: '', name: '', author: '', available: ''};
  actMenu = MENU.USERS;
  menu = MENU;

  add(){
    let k = {id: this.book.id, name: this.book.name, author: this.book.author, available: this.book.available};
    this.books.push(k);
  }
  Menu(m: MENU){
    this.actMenu = m;
  }
}
