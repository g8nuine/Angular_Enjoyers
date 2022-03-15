import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Kniha} from "../models/kniha.model";

@Component({
  selector: 'app-kniha-zoznam',
  templateUrl: './kniha-zoznam.component.html',
  styleUrls: ['./kniha-zoznam.component.css']
})
export class KnihaZoznamComponent {

  @Input()
  knihy: Kniha[] = []

  @Output()
  upravKnihu: EventEmitter<Kniha> = new EventEmitter<Kniha>();

  @Output()
  zmazKnihu: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  uprav(kniha: Kniha): void {
    this.upravKnihu.emit(kniha);
  }

  zmaz(knihaId: string | undefined): void {
    if(knihaId) {
      this.zmazKnihu.emit(knihaId);
    }
  }

}
