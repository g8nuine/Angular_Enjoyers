import { Component } from '@angular/core';
import {Vypozicky} from "../models/vypozicky.model";

@Component({
  selector: 'app-vypozicky-zoznam',
  templateUrl: './vypozicky-zoznam.component.html',
  styleUrls: ['./vypozicky-zoznam.component.css']
})
export class VypozickyZoznamComponent {

  vypozycky: Vypozicky[] = []

  constructor() { }


}
