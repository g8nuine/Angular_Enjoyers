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
  
  borrowings: any = [];
  borrowing = {id: '', book: '', user: ''};

  actMenu = MENU.USERS;
  menu = MENU;

  addBook() {
    this.books.push({
      id:        this.book.id,
      name:      this.book.name,
      author:    this.book.author,
      available: this.book.available,
    });
  }

  addBorrowing() {
    this.borrowings.push({
      id:   this.borrowing.id,
      book: this.borrowing.book,
      user: this.borrowing.user,
    });
  }
}
