import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Osoba} from "../models/osoba.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-osoba-formular',
  templateUrl: './osoba-formular.component.html',
  styleUrls: ['./osoba-formular.component.css']
})
export class OsobaFormularComponent {

  @Input()
  set osoba(data: Osoba | undefined) {
    if (data) {
      this.formular.setValue(data);
    }
  }

  formular: FormGroup;

  @Output()
  pridajOsobu = new EventEmitter<Osoba>();

  @Output()
  upravOsobu = new EventEmitter<Osoba>();

  constructor() {
    this.formular = new FormGroup({
      id: new FormControl(null),
      meno: new FormControl(null),
      priezvisko: new FormControl(null)
    })
  }

  pridaj() {
    this.pridajOsobu.emit({id: Math.random().toString(), meno: this.formular.value.meno, priezvisko: this.formular.value.priezvisko});
    this.formular.reset();
  }

  uprav() {
    this.upravOsobu.emit(this.formular.value);
    this.formular.reset();
  }


}
