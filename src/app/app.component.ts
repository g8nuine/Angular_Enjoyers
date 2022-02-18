import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number = 0;
  pom = 0;

  public test() {
    this.pom = this.number;
    if(this.number > 255) {
      alert("error");
      this.pom = 0;
      this.number = 0;
    }
    while (this.pom != 0) {
      if (this.pom >= 128) {
        this.pom -= 128;
      }
      else if (this.pom >= 64) {
        this.pom -= 64;
      }
      else if (this.pom >= 32) {
        this.pom -= 32;
      }
      else if (this.pom >= 16) {
        this.pom -= 16;
      }
      else if (this.pom >= 8) {
        this.pom -= 8;
      }
      else if (this.pom >= 4) {
        this.pom -= 4;
      }
      else if (this.pom >= 2) {
        this.pom -= 2;
      }
      else if (this.pom >= 1) {
        this.pom -= 1;
      }
    }
  }
}
