import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number = 0;
  pom = 0;

  checkBox1: boolean = false;
  checkBox2: boolean = false;
  checkBox3: boolean = false;
  checkBox4: boolean = false;
  checkBox5: boolean = false;
  checkBox6: boolean = false;
  checkBox7: boolean = false;
  checkBox8: boolean = false;

  public test() {
    this.checkBox1 = false;
    this.checkBox2 = false;
    this.checkBox3 = false;
    this.checkBox4 = false;
    this.checkBox5 = false;
    this.checkBox6 = false;
    this.checkBox7 = false;
    this.checkBox8 = false;
    let x = (document.getElementById("num") as HTMLInputElement).value;
    let number = parseInt(x);
    this.pom = number;
    if(this.pom > 128) {
      alert("error");
      this.pom = 0;
      this.number = 0;
    }
    while (this.pom != 0) {
      if (this.pom == 128) {
        this.pom -= 128;
        this.checkBox8 = true;
      }
      else if (this.pom >= 64) {
        this.pom -= 64;
        this.checkBox7 = true;
      }
      else if (this.pom >= 32) {
        this.pom -= 32;
        this.checkBox6 = true;
      }
      else if (this.pom >= 16) {
        this.pom -= 16;
        this.checkBox5 = true;
      }
      else if (this.pom >= 8) {
        this.pom -= 8;
        this.checkBox4 = true;
      }
      else if (this.pom >= 4) {
        this.pom -= 4;
        this.checkBox3 = true
      }
      else if (this.pom >= 2) {
        this.pom -= 2;
        this.checkBox2 = true;
      }
      else if (this.pom >= 1) {
        this.pom -= 1;
        this.checkBox1 = true;
      }
    }
  }
}
