export class Kniha {

  nazov: string;
  autor: string;

  constructor(kniha: Kniha) {
    this.nazov = kniha.nazov;
    this.autor = kniha.autor;
  }
}
