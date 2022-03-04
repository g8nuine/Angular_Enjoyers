import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {KnihaZoznamComponent} from "./kniha-zoznam/kniha-zoznam.component";
import {KnihaStrankaComponent} from "./kniha-stranka/kniha-stranka.component";
import {KnihaFormularComponent} from "./kniha-formular/kniha-formular.component";
import { OsobaZoznamComponent } from './osoba-zoznam/osoba-zoznam.component';
import { OsobaFormularComponent } from './osoba-formular/osoba-formular.component';
import { OsobaStrankaComponent } from './osoba-stranka/osoba-stranka.component';
import { VypozickyZoznamComponent } from './vypozicky-zoznam/vypozicky-zoznam.component';
import { VypozickyFormularComponent } from './vypozicky-formular/vypozicky-formular.component';
import { VypozickyStrankaComponent } from './vypozicky-stranka/vypozicky-stranka.component';

@NgModule({
  declarations: [
    AppComponent,
    KnihaFormularComponent,
    KnihaZoznamComponent,
    KnihaStrankaComponent,
    KnihaFormularComponent,
    OsobaZoznamComponent,
    OsobaFormularComponent,
    OsobaStrankaComponent,
    VypozickyZoznamComponent,
    VypozickyFormularComponent,
    VypozickyStrankaComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
