import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Osoba} from "../models/osoba.model";

@Component({
  selector: 'app-osoba-zoznam',
  templateUrl: './osoba-zoznam.component.html',
  styleUrls: ['./osoba-zoznam.component.css']
})
export class OsobaZoznamComponent {

  @Input()
  osoby: Osoba[] = []

  @Output()
  upravOsobu: EventEmitter<Osoba> = new EventEmitter<Osoba>();

  @Output()
  zmazOsobu: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  uprav(osoba: Osoba): void {
    this.upravOsobu.emit(osoba);
  }

  zmaz(osobaId: string | undefined): void {
    if(osobaId) {
      this.zmazOsobu.emit(osobaId);
    }
  }
}
