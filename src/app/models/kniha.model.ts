export class Kniha {
  id?: string;
  nazov: string;
  autor: string;

  constructor(kniha: Kniha) {
    this.id = kniha.id;
    this.nazov = kniha.nazov;
    this.autor = kniha.autor;
  }
}
