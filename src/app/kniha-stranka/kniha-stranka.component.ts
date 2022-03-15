import { Component } from '@angular/core';
import {Kniha} from "../models/kniha.model";

@Component({
  selector: 'app-kniha-stranka',
  templateUrl: './kniha-stranka.component.html',
  styleUrls: ['./kniha-stranka.component.css']
})
export class KnihaStrankaComponent{

  knihy: Kniha[] = [];

  knihaNaUpravu?: Kniha;

  pridaj(k: Kniha) {
    this.knihy.push(k)
  }

  uprav(k: Kniha) {
    const index = this.knihy.findIndex(knihaArray => knihaArray.id == k.id);
    if (index !== -1) {
      this.knihy[index] = k;
    }
  }

  zmaz(knihaId: string) {
    const index = this.knihy.findIndex(knihaArray => knihaArray.id === knihaId);
    if(index !== -1) {
      this.knihy.splice(index, 1);
    }
  }

  upravZoZozmanu(kniha: Kniha): void {
    this.knihaNaUpravu = kniha;
  }
}
