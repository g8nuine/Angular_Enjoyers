import {Kniha} from "./kniha.model";
import {Osoba} from "./osoba.model";

export class Vypozicky{
  kniha: Kniha;
  osoba: Osoba;

  constructor(vypozicky: Vypozicky) {
    this.kniha = vypozicky.kniha;
    this.osoba = vypozicky.osoba;
  }
}
