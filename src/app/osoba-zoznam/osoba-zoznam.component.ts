import { Component } from '@angular/core';
import {Osoba} from "../models/osoba.model";

@Component({
  selector: 'app-osoba-zoznam',
  templateUrl: './osoba-zoznam.component.html',
  styleUrls: ['./osoba-zoznam.component.css']
})
export class OsobaZoznamComponent {

  osoby: Osoba[] = []

  constructor() { }


}
