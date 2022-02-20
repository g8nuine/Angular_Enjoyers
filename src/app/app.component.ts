import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // A decimal number from the editbox.
  public decimal: number = 255;
  // That same number in binary.
  public byte: boolean[] = [true, true, true, true,
                            true, true, true, true];

  // Sets the bit pattern in checkboxes.
  public setBits() {
    for (let i = 0; i < 8; i++) {
      this.byte[i] = Boolean(this.decimal & 128 >> i);
    }
  }
  
  // Sets the decimal value according to the checkbox (bit) pattern.
  public setDecimal() {
    this.decimal = 0;
    for (let i = 0; i < 8; i++) {
      if (this.byte[i]) this.decimal |= 128 >> i;
    }
  }
}